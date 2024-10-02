package com.kb.chat.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ChatRoom {
    private long cno;
    private long fromId;
    private long toId;
    private String fromName;
    private String toName;
    private String content;
    private int senderUnreadCount;
    private int receiverUnreadCount;
    private Date createAt;
    private Date updateAt;
}
