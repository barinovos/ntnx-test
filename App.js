import React from "react"
import {
  Form,
  FormSection,
  FormItemSelect,
  StackingLayout,
} from "@nutanix-ui/prism-reactjs"

const data = [
  {
    key: "optionOne",
    label: "Option 1",
  },
  {
    key: "optionTwo",
    label: "Option 2",
  },
]

const App = () => {
  const [selectedRow, setRow] = React.useState(null)
  return (
    <StackingLayout>
      <h1>Test me!</h1>
      <Form>
        <FormSection>
          <FormItemSelect
            id='id'
            label='Select label'
            helpText='Help text'
            selectedRow={selectedRow}
            rowsData={data}
            onSelectedChange={setRow}
          />
        </FormSection>
      </Form>
    </StackingLayout>
  )
}

export default App
