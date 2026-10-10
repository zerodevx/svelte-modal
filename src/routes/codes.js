const codes = [
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal}>
  <h1>Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
</SvelteModal>
`,
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal} class="my-modal">
  <h1>Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
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
<\/style>
`,
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal
  bind:this={modal}
  class="w-9/10 max-w-md scale-95 rounded-lg border-none p-8 opacity-0 shadow-2xl transition-all transition-discrete duration-300 ease-out backdrop:bg-black/0 backdrop:backdrop-blur-none backdrop:transition-all backdrop:transition-discrete backdrop:duration-300 backdrop:ease-out open:scale-100 open:opacity-100 open:backdrop:bg-black/50 open:backdrop:backdrop-blur-xs starting:open:scale-95 starting:open:opacity-0 starting:open:backdrop:bg-black/0 starting:open:backdrop:backdrop-blur-none"
>
  <h1 class="text-lg font-bold">Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
</SvelteModal>
`,
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal} class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello world!</h3>
    <p>ESC or clicking backdrop closes the modal.</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>  
</SvelteModal>
`,
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState } from '@zerodevx/svelte-modal/kit' 
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal} class="tw" attach={enhancedState}>
  <div class="prose">
    <h3>Hello world!</h3>
    <p>ESC, backdrop click, and the back button closes the modal.</p>
  </div>
</SvelteModal>
`,
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState as attach } from '@zerodevx/svelte-modal/kit' 

  let modal
  async function onclick() {
    const option = await modal.show()
    if (option === 'yes') confetti()
  }
<\/script>

<button {onclick}>Show modal</button>

<SvelteModal bind:this={modal} class="tw prose" {attach}>
  <h3>Are cats the cutest pets?</h3>
  <p>(They really are.) ESC, backdrop click, navigation back, and Cancel button cancels the modal.</p>
  <form method="dialog" class="flex justify-end">
    <button class="btn mr-4">Cancel</button>
    <button class="btn btn-primary" value="yes">Yes, absolutely</button>
  </form>
</SvelteModal>
`,
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState as attach } from '@zerodevx/svelte-modal/kit'
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>
 
<SvelteModal bind:this={modal} class="tw prose" {attach} blocking>
  <h3>You can't close me!</h3>
  <p>ESC, backdrop click, and the back button won't close the modal.</p>
  <button class="btn float-end" onclick={() => modal.close()}>Escape hatch</button>
</SvelteModal>
`,
  `<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState as attach } from '@zerodevx/svelte-modal/kit'
<\/script>

<button commandfor="my-modal" command="show-modal">Show modal</button>

<SvelteModal class="tw prose" {attach} id="my-modal">
  <h3>Opened with invoker command</h3>
  <p>ESC, backdrop click, and the back button also closes the modal.</p>
  <button commandfor="my-modal" command="close">Ok, got it</button>
</SvelteModal>
`
]

export default codes
