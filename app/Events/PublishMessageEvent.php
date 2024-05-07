<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PublishMessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $chatId;
    public $msg_id;

    public function __construct($chatId, $msg_id)
    {
        $this->chatId = $chatId;
        $this->msg_id = $msg_id;
    }

    public function broadcastOn()
    {
        return new PresenceChannel('chat.'.$this->chatId."");
    }

    public function broadcastAs()
    {
        return 'MessageSentEvent';
    }
}
