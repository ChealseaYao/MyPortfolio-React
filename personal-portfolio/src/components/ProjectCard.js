import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer"><div className="proj-imgbx" >
       
        <img src={imgUrl}  alt="Project Image" />
     
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
