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

import { MAP, DIRECTIONS_RENDERER } from "../constants"

/**
 * A wrapper around `google.maps.DirectionsRenderer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
 */
export class DirectionsRenderer extends React.PureComponent {
  static propTypes = {}

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
   */
  constructor(props, context) {
    super(props, context)
    const directionsRenderer = new google.maps.DirectionsRenderer()
    construct(
      DirectionsRenderer.propTypes,
      updaterMap,
      this.props,
      directionsRenderer
    )
    directionsRenderer.setMap(this.context[MAP])
    this.state = {
      [DIRECTIONS_RENDERER]: directionsRenderer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[DIRECTIONS_RENDERER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[DIRECTIONS_RENDERER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const directionsRenderer = this.state[DIRECTIONS_RENDERER]
    if (directionsRenderer) {
      directionsRenderer.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default DirectionsRenderer

const eventMap = {}

const updaterMap = {}
