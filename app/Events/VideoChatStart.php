<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

use App\Conversation;

class VideoChatStart implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $conversation;
    public $message;

    /**
     * Create a new event instance.
     *
     * @return void
    */
    public function __construct(Conversation $conversation, $message)
    {
        $this->conversation = $conversation;
        $this->message = $message;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('video.' . $this->conversation->id);
    }

    public function broadcastWith()
    {
        return $this->message;
    }
}
