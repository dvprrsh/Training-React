console.clear()

const createPolicy = (name, amount) =>{
  return{
    type: 'CREATE_POLICY',
    payload:{
      name:name,
      amount:amount
		}    
  }
}
	
	const deletePolicy = (name) =>{
		return{
			type:'DELETE_POLICY',
			payload:{
				name:name
			}
		}
	}
	
	const createClaim = (name, amount) =>{
			return{
				type:'CREATE_CLAIM',
				payload:{
					name:name,
					amount:amount
				}
			}
	}
	
	const claimsHistory = (oldList=[], action) =>{
		if (action.type === 'CREATE_CLAIM'){
			return [...oldList, action.payload]
		}
		return oldList
	}
	
	const accounting = (currentMoney = 100, action) =>{
		if (action.type === 'CREATE_CLAIM'){
			
      return currentMoney - action.payload.amount
		
    }else if (action.type === 'CREATE_POLICY'){
		
      return currentMoney + action.payload.amount
      
		}
		return currentMoney
	}
	
	const policies = (currentPolicies = [], action) =>{
		if (action.type === 'CREATE_POLICY'){
			return [...currentPolicies, action.payload.name]
		}else if (action.type === 'DELETE_POLICY'){
			return (
				currentPolicies.filter(policy => policy !== action.payload.name )
			)
		}
		return currentPolicies
	}
  
const {createStore, combineReducers} = Redux

const ourDepartments = combineReducers({
	accounting:accounting,
	claimsHistory:claimsHistory,
	policies:policies
})

const store = createStore(ourDepartments)

store.dispatch(createPolicy('Jim', 1000))
store.dispatch(createPolicy('Harry', 2000))

store.dispatch(createClaim('Jim', 100))
store.dispatch(createClaim('Harry', 1000))

store.dispatch(deletePolicy('Jim'))
store.dispatch(deletePolicy('Harry'))

console.log(store.getState())