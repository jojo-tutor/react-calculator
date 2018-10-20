import React, { Component } from 'react'
import GroupBy from './GroupBy/GroupBy'
import SortBy from './SortBy/SortBy'
import Items from './Items/Items'
import ClearHistory from './ClearHistory/ClearHistory'

class History extends Component {
  render() {
    return (
      <div className="History">
        History
        <GroupBy/>
        <SortBy/>
        <Items/>
        <ClearHistory/>
      </div>
    )
  }
}

export default History
