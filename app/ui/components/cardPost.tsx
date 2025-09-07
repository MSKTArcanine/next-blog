export default function CardPost(props:{title:string, desc:string}){
    return(<article className="card p-6 flex gap-4 border-2 border-primary-content">
          <h2 className="text-2xl font-semibold">{props.title}</h2>
          <p>{props.desc}</p>
          <button className="btn btn-outline w-fit">GO</button>
        </article>
    )
}