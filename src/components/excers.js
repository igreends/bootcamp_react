// import React from "react";
// import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { Link } from 'react-router-dom';

class CommentForm extends Component{
    render(){
        return(
//             <React.Fragment>
//                  <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
//           <ModalBody></ModalBody>
//             </React.Fragment>
                <div> <Button outline onClick={this.toggleModal}>
                <i className="fa fa-sign-in fa-lg" /> 
                Submit Comment
              </Button></div>
        );
    }
}


//   function RenderCampsite({campsite})  {
//     return (
//       <div className="col-md-5">
//         <Card>
//           <CardImg top src={campsite.image} alt={campsite.name} />
//           <CardBody>
            
//             <CardText>{campsite.description}</CardText>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }

//   function RenderComments({comments}) {
//     if (comments) {
//       return (
//         <div className="col-md-5 m-1">
//           <h4>Comments</h4>
//           {comments.map((comment) => (
//             <div className="comment-container mb-3">
//               <div>{comment.text}</div>
//               <div>
//                 <strong>{comment.author}</strong>{" "}
//                 {new Intl.DateTimeFormat("en-US", {
//                   year: "numeric",
//                   month: "short",
//                   day: "2-digit",
//                 }).format(new Date(Date.parse(comment.date)))}
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return <div />;
//   }

//   function CampsiteInfo(props) {
//     if (props.campsite) {
//       return (
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
//                     </Breadcrumb>
//                     <h2>{props.campsite.name}</h2>
//                     <hr />
//                 </div>
//             </div>
//             <div className="row">
//                 <RenderCampsite campsite={props.campsite} />
//                 <RenderComments comments={props.comments} />
//             </div>
//         </div>
//     );
//     }
//     return <div />;
// }

// export default CampsiteInfo;
