package com.nekogata.scalajs_drum_sequencer.infrastructure

import com.nekogata.scalajs_drum_sequencer.domain.sound.Sound
import org.scalajs.dom.{AudioBuffer, AudioContext, XMLHttpRequest}

import scala.concurrent.{Future, Promise}
import scala.scalajs.js.typedarray.ArrayBuffer

class NotYetLoadedSoundImpl extends Sound {
  override def isLoaded(): Boolean = false

  override def load(fileUrl: String): Future[Sound] = {
    val request = new XMLHttpRequest()
    request.open("GET", fileUrl)
    request.responseType = "arraybuffer"

    val p = Promise[Sound]()

    request.onload = {(_) =>
      val arrayBuff = request.response.asInstanceOf[ArrayBuffer]

      Sound.context.decodeAudioData(arrayBuff, (buf) => {
        p.success(new LoadedSoundImpl(buf))
      }, () => {
        p.failure(new RuntimeException("can't load sound file"))
      })
    }

    request.send()

    p.future
  }

  override def play(): Unit = ()
}


class LoadedSoundImpl(val buffer:AudioBuffer) extends Sound {
  override def isLoaded(): Boolean = true

  override def load(fileURL: String): Future[Sound] = Future.successful(this)

  override def play(): Unit = {
    val source = Sound.context.createBufferSource()
    source.buffer = buffer
    source.connect(Sound.context.destination)
    source.start(0)
  }
}

object Sound {
  val context = new AudioContext()
}
