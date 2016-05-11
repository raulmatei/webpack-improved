import * as React from 'react';
import CounterDisplay from './counter-display';
import CounterIncrease from './counter-increase';

import VirtualizedContent from './asdf';

const EntryPage = (props) => {
    
    return (<div>
        <CounterDisplay />
        <CounterIncrease/>
        <VirtualizedContent />
    </div>);
}

export default EntryPage;