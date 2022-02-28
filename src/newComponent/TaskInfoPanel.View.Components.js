import styled from 'react-emotion';

export const Container = styled("div")`
    display: flex;
    flex: 1 1 auto;
    overflow: auto;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    ${(props) => props.theme.TaskInfoPanel.Container}
    hr {
        border-color: ${(props) => props.theme.Tabs.LabelsContainer.borderColor};
    }
`;
