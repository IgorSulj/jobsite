export default function outsidePress(node: HTMLElement, ignore?: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
        if (node.contains(event.target as Node) && !ignore?.contains(event.target as Node)) {
            node.dispatchEvent(new CustomEvent('outpress'))
        }
    }

    document.addEventListener('pointerdown', handleClick)
    document.addEventListener('wheel', handleClick)

    return {
        destroy() {
            document.removeEventListener('pointerdown', handleClick)
            document.removeEventListener('wheel', handleClick)
        }
    }
}