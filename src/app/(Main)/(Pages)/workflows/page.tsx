import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components'
import { onFlowPublish } from './_actions/workflow-connection'
import { toast } from 'sonner'

type Props = {
    name: string
    description: string
    id: string
    publish: boolean | null
}


const Page = ({ description, id, name, publish }: Props) => {
    const onPublishFlow = async (event: any) => {
        const response = await onFlowPublish(
            id,
            event.target.ariaChecked === 'false'
        )
        if (response) toast.message(response)
    }
    return (
        <div className="flex flex-col relative">
            <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
                Workflows
                <WorkflowButton />
            </h1>
            <Workflows />
        </div>
    )
}

export default Page