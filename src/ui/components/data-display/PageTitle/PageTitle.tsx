import React from 'react';
import { PageTitleContainer, PageTitleStyLed, PageSubtitleStyLed} from './PageTitle.style';

interface PageTitleProps{
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    
    return (
        <PageTitleContainer>
            <PageTitleStyLed>{props.title}</PageTitleStyLed>
            <PageSubtitleStyLed>{props.subtitle}</PageSubtitleStyLed>
        </PageTitleContainer>
    );
}

export default PageTitle;