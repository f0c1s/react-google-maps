/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, MARKER, ANCHOR, MARKER_CLUSTERER } from "../constants"

/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
export class Marker extends React.PureComponent {
  static propTypes = {
    /**
     * For the 2nd argument of `MarkerCluster#addMarker`
     * @see https://github.com/mikesaidani/marker-clusterer-plus
     */
    noRedraw: PropTypes.bool,

    /**
     * function
     */
    onDblClick: PropTypes.func,

    /**
     * function
     */
    onDragEnd: PropTypes.func,

    /**
     * function
     */
    onDragStart: PropTypes.func,

    /**
     * function
     */
    onMouseDown: PropTypes.func,

    /**
     * function
     */
    onMouseOut: PropTypes.func,

    /**
     * function
     */
    onMouseOver: PropTypes.func,

    /**
     * function
     */
    onMouseUp: PropTypes.func,

    /**
     * function
     */
    onRightClick: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
    [MARKER_CLUSTERER]: PropTypes.object,
  }

  static childContextTypes = {
    [ANCHOR]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  constructor(props, context) {
    super(props, context)
    const marker = new google.maps.Marker()
    construct(Marker.propTypes, updaterMap, this.props, marker)
    const markerClusterer = this.context[MARKER_CLUSTERER]
    if (markerClusterer) {
      markerClusterer.addMarker(marker, !!this.props.noRedraw)
    } else {
      marker.setMap(this.context[MAP])
    }
    this.state = {
      [MARKER]: marker,
    }
  }

  getChildContext() {
    return {
      [ANCHOR]: this.context[ANCHOR] || this.state[MARKER],
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[MARKER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[MARKER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const marker = this.state[MARKER]
    if (marker) {
      const markerClusterer = this.context[MARKER_CLUSTERER]
      if (markerClusterer) {
        markerClusterer.removeMarker(marker, !!this.props.noRedraw)
      }
      marker.setMap(null)
    }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export default Marker

const eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
}

const updaterMap = {}
