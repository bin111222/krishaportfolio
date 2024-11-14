const PageContainer = styled.div`
  min-height: 100vh;
  padding: 100px 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 120px 2rem 4rem;
  }
`; 