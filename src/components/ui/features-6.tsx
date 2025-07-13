import React from 'react'

export function Features() {
    return (
        <section className="py-16 md:py-32 bg-gray-50">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="font-anton font-bold text-5xl text-black leading-tight">The Marza ecosystem brings together premium experiences</h2>
                    <p className="font-inter max-w-sm sm:ml-auto text-gray-600 leading-relaxed">Discover our comprehensive range of services designed to elevate your shopping experience with world-class amenities and personalized attention.</p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-16 lg:-mx-24 lg:col-span-3">
                    {/* Bento Box Grid Layout */}
                    <div className="grid grid-cols-12 grid-rows-2 gap-4 h-96 md:h-[500px]">
                        {/* Large Image - Left Side */}
                        <div className="col-span-12 md:col-span-8 row-span-2 relative">
                            <div className="bg-gradient-to-t z-1 from-gray-50 absolute inset-0 to-transparent rounded-2xl"></div>
                            <img 
                                src="https://www.marzahypermarket.com/admin/uploads/slider-images/Image-marza-home-slider-211117110841.png" 
                                className="absolute inset-0 z-10 w-full h-full object-cover object-center rounded-2xl shadow-lg" 
                                alt="Marza hypermarket fresh produce section with fruits and vegetables" 
                                width={2797} 
                                height={1137} 
                            />
                        </div>
                        
                        {/* Top Right Image */}
                        <div className="col-span-12 md:col-span-4 row-span-1 relative">
                            <div className="bg-gradient-to-t z-1 from-gray-50 absolute inset-0 to-transparent rounded-2xl"></div>
                            <img 
                                src="https://i.imghippo.com/files/WfWd6468Hg.jpg" 
                                className="absolute inset-0 z-10 w-full h-full object-cover object-center rounded-2xl shadow-lg" 
                                alt="Premium grocery shopping experience at Marza" 
                                width={800} 
                                height={600} 
                            />
                        </div>
                        
                        {/* Bottom Right Image */}
                        <div className="col-span-12 md:col-span-4 row-span-1 relative">
                            <div className="bg-gradient-to-t z-1 from-gray-50 absolute inset-0 to-transparent rounded-2xl"></div>
                            <img 
                                src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                className="absolute inset-0 z-10 w-full h-full object-cover object-center rounded-2xl shadow-lg" 
                                alt="Modern hypermarket interior with wide aisles" 
                                width={800} 
                                height={600} 
                            />
                        </div>
                    </div>
                </div>
                
                {/* Minimal Text-Only Features */}
                <div className="relative mx-auto max-w-4xl">
                    <div className="space-y-16">
                        
                        {/* Feature 1 - Fast Service */}
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-2 flex justify-center md:justify-start md:-ml-8 lg:-ml-12">
                                <div className="font-inter text-8xl font-black text-gray-200 leading-none">01</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="font-inter text-2xl font-bold text-gray-900 mb-4">Fast Service</h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="font-inter text-lg text-gray-600 leading-relaxed">
                                    Quick checkout and efficient service to save your valuable time with streamlined processes. 
                                    Our dedicated team ensures every customer experience is swift and seamless.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200"></div>

                        {/* Feature 2 - Smart Shopping */}
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-2 flex justify-center md:justify-start md:-ml-8 lg:-ml-12">
                                <div className="font-inter text-8xl font-black text-gray-200 leading-none">02</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="font-inter text-2xl font-bold text-gray-900 mb-4">Smart Shopping</h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="font-inter text-lg text-gray-600 leading-relaxed">
                                    Advanced technology for seamless shopping experiences with digital innovation. 
                                    Modern solutions that make your shopping journey intuitive and effortless.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200"></div>

                        {/* Feature 3 - Secure Environment */}
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-2 flex justify-center md:justify-start md:-ml-8 lg:-ml-12">
                                <div className="font-inter text-8xl font-black text-gray-200 leading-none">03</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="font-inter text-2xl font-bold text-gray-900 mb-4">Secure Environment</h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="font-inter text-lg text-gray-600 leading-relaxed">
                                    Safe and secure environment with 24/7 surveillance, advanced security systems, 
                                    and trained personnel ensuring your peace of mind while shopping. Your safety is our priority.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200"></div>

                        {/* Feature 4 - Premium Quality */}
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-2 flex justify-center md:justify-start md:-ml-8 lg:-ml-12">
                                <div className="font-inter text-8xl font-black text-gray-200 leading-none">04</div>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="font-inter text-2xl font-bold text-gray-900 mb-4">Premium Quality</h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="font-inter text-lg text-gray-600 leading-relaxed">
                                    Curated selection of the finest products and services, handpicked for excellence. 
                                    Every item meets our rigorous quality standards for your complete satisfaction.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}