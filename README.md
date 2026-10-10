# svelte-modal

> Svelte modals done right.

A modern, lightweight modal component for **Svelte 5** powered by the native HTML `<dialog>` element
in very little lines of code.

[Live Demo](https://zerodevx.github.io/svelte-modal/)

## Featuring

- **Native `<dialog>`** — Top-layer stacking, focus management, backdrop, and ESC handling.
- **Svelte 5 native** — Built with runes, snippets, and attachments.
- **Promise-based API** — `modal.show()` resolves with the dialog's return value.
- **SvelteKit integration** — Browser Back button closes the modal via `enhancedState`.
- **Unstyled by default** — Bring your own CSS, Tailwind CSS, or DaisyUI.
- **Blocking mode** — Prevent dismissal via backdrop, ESC, or browser Back.
- **HTML Invoker Commands** — Open and close modals declaratively, without JavaScript handlers.

## Install

```bash
npm i @zerodevx/svelte-modal
```

Requires Svelte 5 or later.

## Quick Start

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'

/** @type {import('@zerodevx/svelte-modal').SvelteModal} */
let modal
</script>

<button onclick={() => modal.show()}>Open Modal</button>

<SvelteModal bind:this={modal}>
  <h2>Hello World!</h2>
  <p>Press ESC or click the backdrop to close.</p>
</SvelteModal>
```

## Usage

### Idiomatic handling

`modal.show()` returns a promise that resolves with the dialog's `returnValue`. Set it using
`modal.close(value)` or natively using `<button value="...">` inside a `<form method="dialog">`.

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'

let modal
async function confirm() {
  if ((await modal.show()) === 'confirm') {
    console.log('Confirmed!')
  }
}
</script>

<button onclick={confirm}>Delete item</button>

<SvelteModal bind:this={modal}>
  <h3>Are you sure?</h3>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</SvelteModal>
```

### SvelteKit Back button

Import `enhancedState` from the Kit subpath to synchronize modal visibility with SvelteKit's shallow
navigation state.

Add the state to `src/app.d.ts`:

```ts
declare global {
  namespace App {
    interface PageState {
      showModal: boolean
    }
  }
}

export {}
```

Then attach it to the modal:

```svelte
<script>
import { SvelteModal } from '@zerodevx/svelte-modal'
import { enhancedState } from '@zerodevx/svelte-modal/kit'

let modal
</script>

<button onclick={() => modal.show()}>Open Modal</button>

<SvelteModal bind:this={modal} attach={enhancedState}>
  <h3>SvelteKit Modal</h3>
  <p>Press Back to dismiss the modal.</p>
</SvelteModal>
```

### Styling and animations

`<SvelteModal>` renders a native `<dialog>` and accepts a `class` prop. Style it with regular CSS or
Tailwind CSS. Modern CSS features such as `@starting-style` and `transition-discrete` enable entry
and exit animations.

```svelte
<SvelteModal bind:this={modal} class="modal">
  <h3>Animated Modal</h3>
</SvelteModal>
```

```css
/* layout.css */
body:has(dialog[open]) {
  @apply touch-none scrollbar-gutter-auto overflow-y-hidden;
}
.modal {
  @apply w-9/10 max-w-md rounded-lg border-none p-8 shadow-xl transition-all transition-discrete duration-300 open:scale-100 open:opacity-100 starting:open:scale-95 starting:open:opacity-0;
}
```

### Blocking modals

Set `blocking` to prevent dismissal through backdrop clicks, ESC, or browser Back (best effort).
Provide an explicit way to close the modal.

```svelte
<SvelteModal bind:this={modal} {attach} blocking>
  <h3>Action Required</h3>
  <button onclick={() => modal.close()}>Continue</button>
</SvelteModal>
```

### HTML Invoker Commands

Use native HTML Invoker Commands to control modals without JavaScript click handlers.

```svelte
<button commandfor="my-modal" command="show-modal">Open</button>

<SvelteModal id="my-modal">
  <p>Declarative modal</p>
  <button commandfor="my-modal" command="close">Close</button>
</SvelteModal>
```

## API Reference

### `<SvelteModal>` props

| Prop       | Type                | Default     | Description                                            |
| ---------- | ------------------- | ----------- | ------------------------------------------------------ |
| `id`       | `string`            | `undefined` | ID of the underlying `<dialog>`.                       |
| `class`    | `string`            | `''`        | CSS classes applied to the dialog.                     |
| `blocking` | `boolean`           | `false`     | Prevents dismissal via backdrop, ESC, or browser Back. |
| `attach`   | `Attachment`        | No-op       | Svelte 5 attachment function.                          |
| `ref`      | `HTMLDialogElement` | `undefined` | Bindable reference to the underlying dialog.           |

### Methods

Access methods with `bind:this`:

| Method        | Signature                | Description                                                     |
| ------------- | ------------------------ | --------------------------------------------------------------- |
| `show()`      | `() => Promise<string>`  | Opens the modal and resolves with its return value when closed. |
| `close(val?)` | `(val?: string) => void` | Closes the modal with an optional return value.                 |

### Subpath exports

**`@zerodevx/svelte-modal/kit`**

- `enhancedState(el: HTMLDialogElement)` — Svelte 5 attachment that synchronizes dialog visibility
  with SvelteKit shallow navigation state, allowing browser Back to close the modal.

## License

[ISC](https://opensource.org/licenses/ISC) © [Jason Lee](mailto:jason@zerodevx.com)
