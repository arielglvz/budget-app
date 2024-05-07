import { CurrencyDollarIcon } from "@heroicons/react/16/solid"
import React from "react"
import { Form } from "react-router-dom"

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
          />
          <div className="grid-xs">
            <label htmlFor="newBudgetAmount"></label>
            <input
              type="number"
              name="newBudgetAmount"
              id="newBudgetAmount"
              placeholder="e.g., $350"
              inputMode="decimal"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn--dark">
          <span>Create Budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </Form>
    </div>
  )
}

export default AddBudgetForm
