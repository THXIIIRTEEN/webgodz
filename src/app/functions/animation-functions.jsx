export const headerHoverLinkOn = (event) => {
    event.target.classList.add("header_link__animation")
}

export const headerHoverLinkOout = (event) => {
    event.target.classList.remove("header_link__animation")
}