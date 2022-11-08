import React from 'react'
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BasicRating from '/components/elements/Rating';
import ButtonCard from '/components/elements/ButtonCard';

const ProfileComponent = ({user}) => {
  return (
      <div className='flex flex-col'>
          {user ?
              <>                  
                  <div className='flex flex-col rounded-md bg-gray-300 dark:bg-gray-700' >
                      <div className='flex flex-col gap-2 border-b dark:border-gray-400  p-5'>
                          <div className="flex flex-row justify-between">
                              <div className="flex flex-row">
                                  <img
                                      className="self-center w-14 h-14 p-4 rounded-full shadow-lg bg-zinc-500 "
                                      src="vercel.svg"
                                      alt="img"
                                  />

                                  <div className="pl-5 flex flex-col">
                                      <div className="flex justify-start items-end text-3xl ">
                                          {user.name}
                                          <VerifiedIcon sx={{ fontSize: 30 }} className="ml-2" />
                                      </div>
                                      <div className="flex justify-start items-center pt-2">
                                          <LocationOnIcon sx={{ fontSize: 20 }} /> <div className="text-xl pl-1">
                                              {(user.provincia ? user.provincia.name + ', ' : 'Provincia , ') + (user.localidad ? user.localidad.name : 'Ciudad')}</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex py-2 items-center">
                                  <button
                                      type="button"
                                      className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-600"
                                  >
                                      Contratar
                                  </button>
                                  <button
                                      type="button"
                                      className="py-2 px-3 mr-2 my-2 focus:outline-none text-white bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base  "
                                  >
                                      Mensaje
                                  </button>
                              </div>
                          </div>
                          <div>
                              <BasicRating />
                          </div>
                          <h5 className="  pt-2 mx-2  mb-1 px-1 text-base font-medium ">
                              {user.aboutme ? user.aboutme : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumend    laboriosam, quod aut officiis ea deleniti repellat nisi delectus magnam reiciendis?'}
                          </h5>
                      </div>

                      <div className='flex p-5 flex-col '>
                          <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                              <span>
                                  Skills
                              </span>
                              <div className='flex'>
                                  {user.categories ?
                                      user.categories.map((categorie) => (
                                          <ButtonCard key={categorie.id} text={categorie.name} />
                                      ))
                                      :
                                      <>
                                      </>}
                                  {/* <ButtonCard text="Categoria" />
                                        <ButtonCard text="Categoria" />
                                        <ButtonCard text="Categoria" /> */}
                              </div>
                          </div>
                          <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                              <span>
                                  Edad
                              </span>
                              <div className='flex'>
                                  {user.birth}
                              </div>
                          </div>
                      </div>

                  </div>
              </>
              :
              <>
              </>}
          {/* {avatar && (
                    <img
                        src={`https://res.cloudinary.com/tamas-demo/image/upload/f_auto,q_auto,w_150,h_150,g_face,c_thumb,r_max/${avatar}`}
                        alt="Profile"
                    />
                )}
                {avatar === 'default_avatar' && (
                    <div>
                        <h4>Selecciona una imagen</h4>
                        <input type="file" onChange={uploadToClient} />
                        <button
                            className="md:p-2 rounded py-2 text-black bg-purple-200 p-2"
                            type="submit"
                            onClick={uploadToServer}
                        >
                            Set Profile Image
                        </button>
                    </div>
                )} */}
          {/* eslint-disable @next/next/no-img-element */}

      </div>
  )
}

export default ProfileComponent