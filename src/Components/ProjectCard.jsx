import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl,link,tools}) => {
  return (
    <Col size={12} sm={8} md={6}>
      <a href={link} target="_blank">
        <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <span className="">I used: {tools}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
export default ProjectCard;