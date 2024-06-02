import Image from "next/image"

const Features = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center translate-y-16 mb-10">
                <h3 className="capitalize FeatureTitle text-[#555] text-center">Some of our destinations:</h3>
                <p className="max-w-[775px] text-center mb-4">Tired of the beach alone? Are the plains too plain? Come along with us on one of our unusual adventures with yout friends. Here are some pictures from people who have had elevated experiences with us.</p>
                <hr />

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2 translate-y-10">
                    <img src="/Destinations-1.jpg" class="rounded-sm w-full h-auto" alt="Feature 1" />
                    <img src="/Destinations-2.jpg" class="rounded-sm w-full h-auto" alt="Feature 2" />
                    <img src="/Destinations-3.jpg" class="rounded-sm w-full h-auto" alt="Feature 3" />
                    <img src="/Destinations-4.jpg" class="rounded-sm w-full h-auto" alt="Feature 4" />
                </div>
            </section>
        </>
    )
}

export { Features }