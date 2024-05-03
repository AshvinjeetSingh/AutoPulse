import ProfileForm from '@/components/Forms/profile-form'
import React from 'react'
import ProfilePicture from './_components/profile-picture'

type Props = {}

const Settings = (props: Props) => {
    // const authUser = await currentUser()
    // const removeProfileImage = async () => {
    //     'use server'
    //     const response = await db.user.update({
    //         where: {
    //             clerkId: authUser.id,
    //         },
    //         data: {
    //             profileImage: '',
    //         },
    //     })
    //     return response
    // }

    // const uploadProfileImage = async (image: string) => {
    //     'use server'
    //     const id = authUser.id
    //     const response = await db.user.update({
    //         where: {
    //             clerkId: id,
    //         },
    //         data: {
    //             profileImage: image,
    //         },
    //     })

    //     return response
    // }
  return (
      <div className="flex flex-col gap-4">
          <h1 className="sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center justify-between text-4xl border-b">
             Settings
          </h1>
          <div className='flex flex-col gap-10 p-6'>
            <div>
                <h2 className='text-2xl font-bold'>User Profile</h2>
                <p className='text-base text-white/50'>
                    Add or Update your information
                </p>
            </div>
            {/* <ProfilePicture
            onDelete={removeProfileImage}
            userImage={user?.profileImage || ''}
            onUpload={uploadProfileImage}
            
            ><ProfilePicture/>
              <ProfileForm /> */}
          </div>
      </div>
  )
}

export default Settings