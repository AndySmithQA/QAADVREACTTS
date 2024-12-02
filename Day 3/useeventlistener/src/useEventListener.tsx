export default function useEventListener(pageElement: string) {

    const ele = pageElement.toString()
    const element = document.querySelector(ele)

    if (element) {
        element.addEventListener('click', () => {
            alert('You clicked the image!')
        })
    }
}