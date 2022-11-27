import Contact from "../sections/contact/contact";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-bio-dark-blue text-white mt-5 p-4">
            <Contact />
            <hr />
            <p className="m-0 text-center">
                Copyright &copy; {currentYear}, <strong>BioEmpreende</strong> – Todos os direitos reservados.
            </p>
        </footer>
    )
}

export default Footer;