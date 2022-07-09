import React from "react";
import { connect } from "react-redux";
import './ExpenseEntryItemList.css';
import { deleteExpense } from "../actions";
import { addExpense } from "../actions";

class EmxpenseEntryItemList extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.expenses.length == 0){
            const items = [
               { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
               { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
               { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
               { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
               { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
               { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
               { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
               { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
               { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
               { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
            ]
            items.forEach((item) => {
               this.props.onAddExpense(
                  { 
                     name: item.name, 
                     amount: item.amount, 
                     spendDate: item.spendDate, 
                     category: item.category 
                  }
               );
            })
        }
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.onDelete(id);
    }

    getTotal() {
        let total = 0;
        for (var i = 0; i < this.props.expenses.length; i++) {
           total += this.props.expenses[i].amount
        }
        return total;
    }

    render() {
        const lists = this.props.expenses.map((item) =>
           <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{new Date(item.spendDate).toDateString()}</td>
              <td>{item.category}</td>
              <td><a href="#" onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
           </tr>
        );
        return (
           <div>
              <table>
                 <thead>
                    <tr>
                       <th>Item</th>
                       <th>Amount</th>
                       <th>Date</th>
                       <th>Category</th>
                       <th>Remove</th>
                    </tr>
                 </thead>
                 <tbody>
                    {lists}
                    <tr>
                       <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
                       <td colSpan="4" style={{ textAlign: "left" }}>
                          {this.getTotal()}
                       </td>
                    </tr>
                 </tbody>
              </table>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        expenses: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAddExpense: expense => {
            dispatch(addExpense(expense));
        },
        onDelete: id => {
            dispatch(deleteExpense(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmxpenseEntryItemList)
