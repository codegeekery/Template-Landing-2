import { FaTwitterSquare, FaFacebookSquare, FaSnapchatSquare } from 'react-icons/fa';


const Footer = () => {


    const years = new Date().getFullYear();

    return (
        <>

            <footer className="relative bottom-0 w-full bg-[#555] translate-y-40">
                <div className="container mx-auto py-4 px-6 flex flex-col md:flex-row justify-between items-center text-white">
                    <div className="mb-4 md:mb-0">
                        <p className="mb-2">&copy; {years} All rights reserved.</p>
                        <p>Why are you even reading this?! There&apos;s never anything interesting in the footer!</p>
                    </div>
                    <ul className="flex ml-auto">
                        <li className="mr-4"><a href="#"><FaTwitterSquare size="2em" /></a></li>
                        <li className="mr-4"><a href="#"><FaFacebookSquare size="2em" /></a></li>
                        <li><a href="#"><FaSnapchatSquare size="2em" /></a></li>
                    </ul>
                </div>
            </footer>

        </>
    );
}

export { Footer }