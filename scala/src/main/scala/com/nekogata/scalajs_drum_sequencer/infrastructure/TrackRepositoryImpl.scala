package com.nekogata.scalajs_drum_sequencer.infrastructure

import com.nekogata.scalajs_drum_sequencer.domain.sequener._
import com.nekogata.scalajs_drum_sequencer.js_exports.SequencerEvents

/**
  * Created by shinpei on 2017/09/07.
  */
class TrackRepositoryImpl extends TrackRepository{
  override def get(p: PatternId, tn: TrackName): Track = TrackRepositoryImpl.state(p, tn)

  override def store(p: PatternId, tn: TrackName, t: Track): Unit = {
    TrackRepositoryImpl.state = TrackRepositoryImpl.state.updated((p, tn), t)

    SequencerEvents.TrackStateChanged.fire()
  }
}

object TrackRepositoryImpl {
  val hhTrack = new Track(Track.defaultHHNotes)
  val rsTrack = new Track(Track.defaultRSNotes)
  val sdTrack = new Track(Track.defaultSDNotes)
  val bdTrack = new Track(Track.defaultBDNotes)

  var state: Map[(PatternId, TrackName), Track] = Map(
    (PatternA, HH) -> hhTrack,
    (PatternA, RS) -> rsTrack,
    (PatternA, SD) -> sdTrack,
    (PatternA, BD) -> bdTrack,

    (PatternB, HH) -> hhTrack,
    (PatternB, RS) -> rsTrack,
    (PatternB, SD) -> sdTrack,
    (PatternB, BD) -> bdTrack,

    (PatternC, HH) -> hhTrack,
    (PatternC, RS) -> rsTrack,
    (PatternC, SD) -> sdTrack,
    (PatternC, BD) -> bdTrack,

    (PatternD, HH) -> hhTrack,
    (PatternD, RS) -> rsTrack,
    (PatternD, SD) -> sdTrack,
    (PatternD, BD) -> bdTrack
  )
}
