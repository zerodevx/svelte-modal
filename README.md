# svelte-modal

> Svelte modals done right.

A modern, lightweight modal dialog component for **Svelte 5** powered by the native HTML `<dialog>`
element in very little lines of code.

[Live Demo](https://zerodevx.github.io/svelte-modal/)

---

## Highlights

- ⚡ **Native `<dialog>` underneath** — Built-in top-layer stacking, focus management, native
  backdrop, and keyboard accessibility (`ESC` to close).
- 🪄 **Svelte 5 native** — Designed from the ground up for Svelte 5 runes, snippets, and
  attachments.
- 🤝 **Async / Promise-based** — `modal.show()` returns a `Promise<string>` that resolves when
  closed with the dialog's return value.
- 🔙 **SvelteKit back-button integration** — Ships with an `enhancedState` attachment so the
  browser's Back button closes the modal instead of navigating away.
- 🎨 **Completely unstyled** — Zero bundled CSS opinions. Easily style with vanilla CSS, Tailwind
  CSS, or DaisyUI, with smooth entry/exit animations via `@starting-style`.
- 🔒 **Blocking mode** — Disable closing on backdrop click, `ESC`, or browser back button when
  confirmation or critical action is required.
- 🏷️ **Declarative invokers** — Works natively with HTML Invoker Commands (`commandfor` /
  `command`).

---

## Installation

```bash
npm i @zerodevx/svelte-modal
```

> **Note**: Requires `svelte >= 5.0.0`.

---

## Quick Start

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'

let modal
</script>

<button onclick={() => modal.show()}>Open Modal</button>

<SvelteModal bind:this={modal}>
  <h2>Hello World!</h2>
  <p>Press ESC or click backdrop to close.</p>
</SvelteModal>
```

---

## Usage & Examples

### 1. Promise-Based Return Values

`modal.show()` returns a Promise that resolves with the dialog's `returnValue`. You can set this
value programmatically via `modal.close(value)` or natively using `<button value="...">` inside a
`<form method="dialog">`.

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'

let modal

async function handleConfirm() {
  const result = await modal.show()
  if (result === 'confirm') {
    console.log('User confirmed!')
  }
}
</script>

<button onclick={handleConfirm}>Open Confirmation</button>

<SvelteModal bind:this={modal}>
  <h3>Are you sure?</h3>
  <p>This action cannot be undone.</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</SvelteModal>
```

---

### 2. SvelteKit History Integration (`enhancedState`)

In single-page applications, users expect the browser's **Back** button to dismiss an open modal
rather than navigating back to the previous page.

With the `enhancedState` attachment, `@zerodevx/svelte-modal` synchronizes with SvelteKit's shallow
page state.

#### 1. Setup `app.d.ts` (TypeScript / JSDoc)

Add `showModal` to `App.PageState`:

```ts
// src/app.d.ts
declare global {
  namespace App {
    interface PageState {
      showModal: boolean
    }
  }
}
export {}
```

#### 2. Attach to `<SvelteModal>`

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'
import { enhancedState as attach } from '@zerodevx/svelte-modal/kit'

let modal
</script>

<button onclick={() => modal.show()}>Open Modal</button>

<SvelteModal bind:this={modal} {attach}>
  <h3>SvelteKit Enhanced Modal</h3>
  <p>Pressing the browser's Back button will close this modal smoothly.</p>
</SvelteModal>
```

---

### 3. Styling & Animations

Because `<SvelteModal>` renders a native `<dialog>`, you can leverage modern CSS transitions,
including `@starting-style` and `transition-discrete` for seamless entry/exit animations.

#### Vanilla CSS

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'
let modal
</script>

<button onclick={() => modal.show()}>Open Modal</button>

<SvelteModal bind:this={modal} class="my-modal">
  <h3>Animated Dialog</h3>
  <p>Smooth open/close transition.</p>
</SvelteModal>

<style>
.my-modal {
  padding: 2rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 28rem;
  width: 90%;
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    overlay 0.3s ease allow-discrete,
    display 0.3s ease allow-discrete;

  &[open] {
    opacity: 1;
    transform: scale(1);
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0px);
    transition:
      background-color 0.3s ease,
      backdrop-filter 0.3s ease,
      overlay 0.3s ease allow-discrete,
      display 0.3s ease allow-discrete;
  }

  &[open]::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  @starting-style {
    &[open] {
      opacity: 0;
      transform: scale(0.9);
    }
    &[open]::backdrop {
      background-color: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0px);
    }
  }
}
</style>
```

#### Tailwind CSS (v4)

```svelte
<SvelteModal
  bind:this={modal}
  class="w-9/10 max-w-md scale-95 rounded-lg border-none p-8 opacity-0 shadow-2xl transition-all transition-discrete duration-300 ease-out backdrop:bg-black/0 backdrop:backdrop-blur-none backdrop:transition-all backdrop:transition-discrete backdrop:duration-300 backdrop:ease-out open:scale-100 open:opacity-100 open:backdrop:bg-black/50 open:backdrop:backdrop-blur-xs starting:open:scale-95 starting:open:opacity-0 starting:open:backdrop:bg-black/0 starting:open:backdrop:backdrop-blur-none"
>
  <h3>Tailwind Modal</h3>
  <p>Fully animated with Tailwind utilities.</p>
</SvelteModal>
```

---

### 4. Blocking Modals

Setting `blocking={true}` prevents the user from closing the dialog by clicking the backdrop,
pressing `ESC`, or pressing the browser back button (best effort).

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'
let modal
</script>

<button onclick={() => modal.show()}>Open Blocking Modal</button>

<SvelteModal bind:this={modal} blocking>
  <h3>Action Required</h3>
  <p>You must click the escape hatch button to close.</p>
  <button onclick={() => modal.close()}>Escape Hatch</button>
</SvelteModal>
```

---

### 5. Declarative HTML Invoker Commands

HTML Invoker Commands allow buttons to trigger actions on target elements without JavaScript click
listeners:

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'
</script>

<button commandfor="my-modal" command="show-modal">Show Modal</button>

<SvelteModal id="my-modal">
  <h3>Declarative Invoker Modal</h3>
  <p>Opened without a click handler!</p>
  <button commandfor="my-modal" command="close">Close</button>
</SvelteModal>
```

---

## API Reference

### `<SvelteModal>` Props

| Prop       | Type                | Default     | Description                                                                      |
| :--------- | :------------------ | :---------- | :------------------------------------------------------------------------------- |
| `id`       | `string`            | `undefined` | The `id` attribute applied to the `<dialog>` element.                            |
| `class`    | `string`            | `''`        | CSS class names applied to the `<dialog>` element.                               |
| `blocking` | `boolean`           | `false`     | When `true`, disables closing via backdrop click, `ESC`, or browser Back button. |
| `attach`   | `Attachment`        | `() => {}`  | Svelte 5 attachment function (e.g. `enhancedState`).                             |
| `ref`      | `HTMLDialogElement` | `undefined` | Bindable reference to the underlying `<dialog>` element (`bind:ref`).            |
| `children` | `Snippet`           | —           | Content rendered inside the dialog.                                              |

### Component Methods

Access methods via `bind:this`:

```svelte
<SvelteModal bind:this={modal} />
```

| Method    | Signature                | Description                                                                                               |
| :-------- | :----------------------- | :-------------------------------------------------------------------------------------------------------- |
| `show()`  | `() => Promise<string>`  | Opens the modal as a modal dialog and returns a promise that resolves with the `returnValue` when closed. |
| `close()` | `(val?: string) => void` | Closes the modal with an optional `returnValue`.                                                          |

### Subpath Exports

#### `@zerodevx/svelte-modal/kit`

- **`enhancedState(el: HTMLDialogElement)`**: Svelte 5 attachment (`attach={enhancedState}`) that
  synchronizes `<dialog>` visibility with SvelteKit shallow navigation state, allowing the browser's
  Back button to close the modal.

---

## License

[ISC](https://opensource.org/licenses/ISC) © [Jason Lee](mailto:jason@zerodevx.com)
