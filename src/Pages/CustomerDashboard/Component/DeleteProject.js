import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Modal from "../../Global/Component/UI/Modal/Modal";
import Button from "../../Global/Input/Button";
import Heading from "../../Global/Component/UI/Headings/Heading";
import Message from "../../Global/Component/UI/Message/Message";
import { deleteProject } from "../../Redux/Store/actions/JobPostActions";
import JobPostReducer from "../../Redux/Store/Reducers/JobPostReducer";

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const TodoWrapper = styled.div`
  margin: 1rem 0rem;
  font-size: 1.3rem;
  text-align: center;
  color: var(--color-white);
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding: 0 3rem;
`;

const DeleteProject = ({
  show,
  close,
  project,
  deleteProject,
  error,
  loading
}) => {
  return (
    <Modal opened={show} close={close}>
      <Heading noMargin size="h1" color="white">
        Deleting todo
      </Heading>
      <Heading bold size="h4" color="white">
        Are you sure you want to delete this todo?
      </Heading>

      <ButtonsWrapper>
        <Button
          contain
          color="red"
          onClick={
            (async () => await deleteProject(project.id),
            console.log("clicked"))
          }
          disabled={loading}
          loading={loading ? "Deleting..." : null}
        >
          Delete
        </Button>
        <Button color="main" contain onClick={close}>
          Cancel
        </Button>
      </ButtonsWrapper>
      <MessageWrapper>
        <Message error show={error}>
          {error}
        </Message>
      </MessageWrapper>
    </Modal>
  );
};

const mapStateToProps = ({ project }) => ({
  error: project.deleteProject.error,
  loading: project.deleteProject.loading
});

const mapDispatchToProps = {
  deleteProject: deleteProject
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProject);
