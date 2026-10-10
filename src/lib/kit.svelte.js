import { goto } from '$app/navigation'
import { page } from '$app/state'

/** @type {import('svelte/attachments').Attachment} */
export function enhancedState(/** @type {HTMLDialogElement} */ el) {
  const push = () => goto('', { state: { showModal: true }, shallow: true })
  $effect(() => {
    // user clicked browser back button
    if (!page.state.showModal && el.hasAttribute('open')) {
      el.hasAttribute('blocking') ? push() : el.close('')
    }
  })
  const o = new MutationObserver((mutes) => {
    for (const { type, attributeName } of mutes) {
      if (type === 'attributes' && attributeName === 'open') {
        if (el.hasAttribute('open')) {
          goto('', { replace: true, shallow: true })
          push()
        }
        // user closed modal normally
        else if (page.state.showModal) history.back()
      }
    }
  })
  o.observe(el, { attributes: true, attributeFilter: ['open'] })
  return () => o.disconnect()
}
