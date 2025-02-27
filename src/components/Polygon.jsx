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

import { MAP, POLYGON } from "../constants"

/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */
export class Polygon extends React.PureComponent {
  static propTypes = {
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
    onMouseMove: PropTypes.func,

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
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  constructor(props, context) {
    super(props, context)
    const polygon = new google.maps.Polygon()
    construct(Polygon.propTypes, updaterMap, this.props, polygon)
    polygon.setMap(this.context[MAP])
    this.state = {
      [POLYGON]: polygon,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[POLYGON], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[POLYGON],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const polygon = this.state[POLYGON]
    if (polygon) {
      polygon.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default Polygon

const eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
}

const updaterMap = {}
