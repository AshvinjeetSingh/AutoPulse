'use client'
import WorkflowForm from '@/components/Forms/workflow-form'
import CustomModal from '@/components/Global/custom-modal'
import { Button } from '@/components/ui/button'
import { useBilling } from '@/providers/billing-provider'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'


type Props = {}

const WorkflowButton = (props: Props) => {
const {setOpen,setClose}=useModal()
const { credits } = useBilling()
const handleClick=()=>{
    setOpen(
        <CustomModal 
        title="Create a workflow Automation"
        subheading='Workflows Can help you automate your task easily'
        >
            <WorkflowForm/>
        </CustomModal>

    )
}

  return (
      <Button size={'icon'} {...(credits !== '0'
          ? {
              onClick: handleClick,
          }
          : {
              disabled: true,
          })}>
    <Plus/>
   </Button>
  )
}

export default WorkflowButton