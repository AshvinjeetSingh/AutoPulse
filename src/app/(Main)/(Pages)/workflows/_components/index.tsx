import React from 'react'
import WorkFlow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
      <div className="relative flex flex-col gap-4">
          <section className="flex flex-col m-2">
            <WorkFlow description='creating a test workflow'
            id="12345" name='Automation Workflow' publish="false"/>
          </section>
          </div>
  )
}

export default Workflows