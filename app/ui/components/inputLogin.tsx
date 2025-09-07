export default function InputLogin(props:{label:string, input:string, id:string, defaultValue?:string, error?:boolean}){
    return (
        <section className="flex flex-col items-start">
            <label htmlFor={props.id} defaultValue={props.defaultValue}>{props.label}</label>
            <input defaultValue={props.defaultValue} type={props.input} name={props.id} id={props.id} 
            className={`${!props.error ? 'border-base-300' : 'border-error-content'} border-2 rounded-md border-base-300`}/>
        </section>
    )
}