package com.nekogata.scalajs_drum_sequencer.domain.sound

import scala.concurrent.Future

trait Sound {
  def isLoaded(): Boolean
  def load(fileUrl: String): Future[Sound]
  def play(): Unit
}
