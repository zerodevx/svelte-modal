<script>
import { SvelteModal } from '#lib'
import { enhancedState as attach } from '#lib/kit.svelte.js'
import codes from './codes.js'
import { version } from '$app/env'
import { confetti } from '@neoconfetti/svelte'

/** @type {import('#lib').SvelteModal[]} */
const modals = $state([])
let can = $state(false)
const sleep = (t = 0) => new Promise((r) => setTimeout(r, t))

async function pop() {
  await sleep(300)
  can = true
  await sleep(3500)
  can = false
}
</script>

<div class="mx-auto prose mt-8 mb-24 px-6 sm:px-0">
  <h1>svelte-modal</h1>
  <span class="badge font-mono badge-sm badge-secondary">v{version}</span>
  <blockquote>Svelte modals done right.</blockquote>
  <h2>Installation</h2>
  <pre><code>npm i @zerodevx/svelte-modal</code></pre>
  <h2>Examples</h2>

  <h3>1. Basic usage</h3>
  <p>Modals ship unstyled.</p>
  <pre><code>{codes[0]}</code></pre>
  <div class="flex justify-end">
    <button class="btn btn-primary" onclick={() => modals[0].show()}>Show modal</button>
  </div>

  <h3>2. Styling</h3>
  <p>Just use classes.</p>
  <div class="tabs tabs-border">
    <input type="radio" name="css_tabs" class="tab" aria-label="Vanilla" />
    <div class="tab-content">
      <pre class="max-h-108"><code>{codes[1]}</code></pre>
      <div class="flex justify-end">
        <button class="btn btn-primary" onclick={() => modals[1].show()}>Show modal</button>
      </div>
    </div>
    <input type="radio" name="css_tabs" class="tab" aria-label="Tailwind CSS" checked />
    <div class="tab-content">
      <pre><code>{codes[2]}</code></pre>
      <div class="flex justify-end">
        <button class="btn btn-primary" onclick={() => modals[2].show()}>Show modal</button>
      </div>
    </div>
    <input type="radio" name="css_tabs" class="tab" aria-label="DaisyUI" />
    <div class="tab-content">
      <pre><code>{codes[3]}</code></pre>
      <div class="flex justify-end">
        <button class="btn btn-primary" onclick={() => modals[3].show()}>Show modal</button>
      </div>
    </div>
  </div>

  <h3>3. Enhanced state</h3>
  <p>
    If you're using SvelteKit, use the <code>enhancedState</code> attachment to let the browser's back
    button close the modal.
  </p>
  <pre><code>{codes[4]}</code></pre>
  <div class="flex justify-end">
    <button class="btn btn-primary" onclick={() => modals[4].show()}>Show modal</button>
  </div>

  <h3>4. Idiomatic code</h3>
  <p>
    <code>show()</code> returns a promise that resolves to the dialog's <code>returnValue</code>
    when closed. Programatically calling <code>close(returnValue: string)</code> works too.
  </p>
  <pre><code>{codes[5]}</code></pre>
  <div class="flex justify-end">
    <button
      class="btn btn-primary"
      onclick={async () => {
        const option = await modals[5].show()
        if (option === 'yes') pop()
      }}>Show modal</button
    >
  </div>

  <h3>5. Blocking modals</h3>
  <p>
    Assert the <code>blocking</code> prop to prevent cancellation by ESC, backdrop click, or the back
    button (best effort).
  </p>
  <pre><code>{codes[6]}</code></pre>
  <div class="flex justify-end">
    <button class="btn btn-primary" onclick={() => modals[6].show()}>Show modal</button>
  </div>

  <h3>6. Declarative use</h3>
  <p>You can also declaratively control the modal by dispatching commands.</p>
  <pre><code>{codes[7]}</code></pre>
  <div class="flex justify-end">
    <button class="btn btn-primary" commandfor="modal-7" command="show-modal">Show modal</button>
  </div>
</div>

<footer class="flex h-48 w-full items-center justify-center bg-neutral text-neutral-content">
  <p class="text-sm">♥ <a class="link" href="mailto:jason@zerodevx.com">jason@zerodevx.com</a></p>
</footer>

{#if can}
  <div class="fixed top-1/3 left-1/2"><span use:confetti></span></div>
{/if}

<SvelteModal bind:this={modals[0]}>
  <h1>Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
</SvelteModal>

<SvelteModal bind:this={modals[1]} class="my-modal">
  <h1>Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
</SvelteModal>

<SvelteModal
  bind:this={modals[2]}
  class="w-9/10 max-w-md scale-95 rounded-lg border-none p-8 opacity-0 shadow-2xl transition-all transition-discrete duration-300 ease-out backdrop:bg-black/0 backdrop:backdrop-blur-none backdrop:transition-all backdrop:transition-discrete backdrop:duration-300 backdrop:ease-out open:scale-100 open:opacity-100 open:backdrop:bg-black/50 open:backdrop:backdrop-blur-xs starting:open:scale-95 starting:open:opacity-0 starting:open:backdrop:bg-black/0 starting:open:backdrop:backdrop-blur-none"
>
  <div>
    <h1 class="text-lg font-bold">Hello world!</h1>
    <p>ESC or clicking backdrop closes the modal.</p>
  </div>
</SvelteModal>

<SvelteModal bind:this={modals[3]} class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello world!</h3>
    <p>ESC or clicking backdrop closes the modal.</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button value="cancel">cancel</button>
  </form>
</SvelteModal>

<SvelteModal bind:this={modals[4]} class="tw" {attach}>
  <div class="prose">
    <h3>Hello world!</h3>
    <p>ESC, backdrop click, and the back button closes the modal.</p>
  </div>
</SvelteModal>

<SvelteModal bind:this={modals[5]} class="tw prose" {attach}>
  <h3>Are cats the cutest pets?</h3>
  <p>
    (They really are.) ESC, backdrop click, navigation back, and Cancel button cancels the modal.
  </p>
  <form method="dialog" class="flex justify-end">
    <button class="btn mr-4">Cancel</button>
    <button class="btn btn-primary" value="yes">Yes, absolutely</button>
  </form>
</SvelteModal>

<SvelteModal bind:this={modals[6]} class="tw prose" {attach} blocking>
  <h3>You can't close me!</h3>
  <p>ESC, backdrop click, and the back button won't close the modal.</p>
  <button class="btn float-end" onclick={() => modals[6].close()}>Escape hatch</button>
</SvelteModal>

<SvelteModal bind:this={modals[7]} class="tw prose backdrop:cursor-pointer" {attach} id="modal-7">
  <h3>Opened with invoker command</h3>
  <p>ESC, backdrop click, and the back button also closes the modal.</p>
  <button class="btn float-end" commandfor="modal-7" command="close">OK, got it</button>
</SvelteModal>

<style lang="postcss">
:global(.my-modal) {
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
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
  }
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
