import Listitem from './Listitem';

const ListGroup = ({transactions , deleteTransaction , editTransaction}) => {
if(!transactions|| transactions.length===0){
  return (
    <h3 className='display-6 text-center mt-3'>No Transactions Yet..</h3>
  )
}


  return (
    
       <ul class="list-group">
   {transactions.map((transaction)=>
   (<Listitem key={transactions.id} transaction={transaction} deleteTransaction={deleteTransaction} editTransaction={editTransaction}/>))}
               </ul>
    
  )
}

export default ListGroup;
