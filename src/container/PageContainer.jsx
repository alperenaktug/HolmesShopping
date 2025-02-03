import PropTypes from "prop-types";
import Container from "@mui/material/Container";

function PageContainer({ children }) {
  return (
    <div>
      <Container maxWidth="md">{children}</Container>
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
