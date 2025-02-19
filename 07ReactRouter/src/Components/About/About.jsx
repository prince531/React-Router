import React from 'react'
export default function About() {
  return (
      <div className="py-16 bg-purple-400">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img className='w-3/4 rounded-xl shadow-2xl ml-2'
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZPhAaPROqhuY8SaD215Z0CnJr2KVYIeT9g&s"
                          alt="image"
                          style={{boxShadow:"1px 1px 32px 1px rgba(0, 0, 0, 0.9)"}}
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-800">
                        
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-800">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}