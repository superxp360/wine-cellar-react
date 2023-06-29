
const currentYear = new Date().getFullYear();

export default function Footer () {

    return(
        <footer>
            <p>&copy; {currentYear}</p>
            <p>See Code in GitHub</p>
        </footer>
    )
}