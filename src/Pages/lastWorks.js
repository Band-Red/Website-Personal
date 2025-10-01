import Introduction from "../components/pragraphs/Introduction"
import CardProject from "../components/Cards/CardProject"


export default function lastWorks() {
  return (
    <>
      <Introduction 
        section={"Last-Work"} 
        title={"Some Work I've Done"} 
        subTitle={`Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.`}
      />

      <div className={"last-Worked"}>
        <CardProject 
            picture={"."}
            descriptionPicture={"a"}
            nameProject={"project1"}
            description={"wedwdwd"}
            link={".//"}
            text={"click"}
        />
      </div>
    </>
  )
}
