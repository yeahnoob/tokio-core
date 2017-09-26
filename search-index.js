var searchIndex = {};
searchIndex["tokio_core"] = {"doc":"`Future`-powered I/O at the core of Tokio","items":[[0,"net","tokio_core","TCP/UDP bindings for `tokio-core`",null,null],[3,"TcpStream","tokio_core::net","An I/O object representing a TCP stream connected to a remote endpoint.",null,null],[3,"TcpStreamNew","","Future returned by `TcpStream::connect` which will resolve to a `TcpStream` when the stream is connected.",null,null],[3,"TcpListener","","An I/O object representing a TCP socket listening for incoming connections.",null,null],[3,"Incoming","","Stream returned by the `TcpListener::incoming` function representing the stream of sockets received from a listener.",null,null],[3,"UdpSocket","","An I/O object representing a UDP socket.",null,null],[3,"UdpFramed","","A unified `Stream` and `Sink` interface to an underlying `UdpSocket`, using the `UdpCodec` trait to encode and decode frames.",null,null],[3,"SendDgram","","A future used to write the entire contents of some data to a UDP socket.",null,null],[3,"RecvDgram","","A future used to receive a datagram from a UDP socket.",null,null],[11,"as_raw_fd","","",0,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",1,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"bind","","Create a new TCP listener associated with this event loop.",1,{"inputs":[{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"result"}}],[11,"accept","","Attempt to accept a connection and create a new connected `TcpStream` if successful.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"from_listener","","Create a new TCP listener from the standard library's TCP listener.",1,{"inputs":[{"name":"tcplistener"},{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"result"}}],[11,"poll_read","","Test whether this socket is ready to be read or not.",1,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"local_addr","","Returns the local address that this listener is bound to.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"incoming","","Consumes this listener, returning a stream of the sockets this listener accepts.",1,{"inputs":[{"name":"self"}],"output":{"name":"incoming"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"connect","","Create a new TCP stream connected to the specified address.",0,{"inputs":[{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"tcpstreamnew"}}],[11,"from_stream","","Create a new `TcpStream` from a `net::TcpStream`.",0,{"inputs":[{"name":"tcpstream"},{"name":"handle"}],"output":{"name":"result"}}],[11,"connect_stream","","Creates a new `TcpStream` from the pending socket inside the given `std::net::TcpStream`, connecting it to the address specified.",0,{"inputs":[{"name":"tcpstream"},{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"box"}}],[11,"poll_read","","Test whether this socket is ready to be read or not.",0,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Test whether this socket is ready to be written to or not.",0,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"local_addr","","Returns the local address that this stream is bound to.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"peer_addr","","Returns the remote address that this stream is connected to.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the read, write, or both halves of this connection.",0,{"inputs":[{"name":"self"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on this socket.",0,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"keepalive","","Returns whether keepalive messages are enabled on this socket, and if so the duration of time between them.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_linger","","Sets the linger duration of this socket by setting the SO_LINGER option",0,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"linger","","reads the linger duration for this socket by getting the SO_LINGER option",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read","","",0,null],[11,"write","","",0,null],[11,"flush","","",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"prepare_uninitialized_buffer","","",0,null],[11,"read_buf","","",0,{"inputs":[{"name":"self"},{"name":"b"}],"output":{"name":"poll"}}],[11,"shutdown","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"write_buf","","",0,{"inputs":[{"name":"self"},{"name":"b"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"start_send","","",4,null],[11,"poll_complete","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"close","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"get_ref","","Returns a reference to the underlying I/O stream wrapped by `Framed`.",4,{"inputs":[{"name":"self"}],"output":{"name":"udpsocket"}}],[11,"get_mut","","Returns a mutable reference to the underlying I/O stream wrapped by `Framed`.",4,{"inputs":[{"name":"self"}],"output":{"name":"udpsocket"}}],[11,"into_inner","","Consumes the `Framed`, returning its underlying I/O stream.",4,{"inputs":[{"name":"self"}],"output":{"name":"udpsocket"}}],[11,"as_raw_fd","","",5,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"bind","","Create a new UDP socket bound to the specified address.",5,{"inputs":[{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"result"}}],[11,"from_socket","","Creates a new `UdpSocket` from the previously bound socket provided.",5,{"inputs":[{"name":"udpsocket"},{"name":"handle"}],"output":{"name":"result"}}],[11,"framed","","Provides a `Stream` and `Sink` interface for reading and writing to this `UdpSocket` object, using the provided `UdpCodec` to read and write the raw data.",5,{"inputs":[{"name":"self"},{"name":"c"}],"output":{"name":"udpframed"}}],[11,"local_addr","","Returns the local address that this stream is bound to.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"connect","","Connects the UDP socket setting the default destination for send() and limiting packets that are read via recv from the address specified in addr.",5,{"inputs":[{"name":"self"},{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"send","","Sends data on the socket to the address previously bound via connect().  On success, returns the number of bytes written.",5,null],[11,"recv","","Receives data from the socket previously bound with connect().  On success, returns the number of bytes read.",5,null],[11,"poll_read","","Test whether this socket is ready to be read or not.",5,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Test whether this socket is ready to be written to or not.",5,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"send_to","","Sends data on the socket to the given address. On success, returns the number of bytes written.",5,null],[11,"send_dgram","","Creates a future that will write the entire contents of the buffer `buf` provided as a datagram to this socket.",5,{"inputs":[{"name":"self"},{"name":"t"},{"name":"socketaddr"}],"output":{"name":"senddgram"}}],[11,"recv_from","","Receives data from the socket. On success, returns the number of bytes read and the address from whence the data came.",5,null],[11,"recv_dgram","","Creates a future that receive a datagram to be written to the buffer provided.",5,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"recvdgram"}}],[11,"broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",5,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",5,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",5,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",5,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",5,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",5,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",5,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",5,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",5,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",5,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",6,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",7,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[8,"UdpCodec","","Encoding of frames via buffers.",null,null],[16,"In","","The type of decoded frames.",8,null],[16,"Out","","The type of frames to be encoded.",8,null],[10,"decode","","Attempts to decode a frame from the provided buffer of bytes.",8,null],[10,"encode","","Encodes a frame into the buffer provided.",8,null],[0,"reactor","tokio_core","The core reactor driving all I/O",null,null],[3,"PollEvented","tokio_core::reactor","A concrete implementation of a stream of readiness notifications for I/O objects that originates from an event loop.",null,null],[3,"Timeout","","A future representing the notification that a timeout has occurred.",null,null],[3,"Interval","","A stream representing notifications at fixed interval",null,null],[3,"Core","","An event loop.",null,null],[3,"CoreId","","An unique ID for a Core",null,null],[3,"Remote","","Handle to an event loop, used to construct I/O objects, send messages, and otherwise interact indirectly with the event loop itself.",null,null],[3,"Handle","","A non-sendable handle to an event loop, useful for manufacturing instances of `LoopData`.",null,null],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new readiness stream associated with the provided `loop_handle` and for the given `source`.",9,{"inputs":[{"name":"e"},{"name":"handle"}],"output":{"name":"result"}}],[11,"deregister","","Deregisters this source of events from the reactor core specified.",9,{"inputs":[{"name":"self"},{"name":"handle"}],"output":{"name":"result"}}],[11,"poll_read","","Tests to see if this source is ready to be read from or not.",9,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Tests to see if this source is ready to be written to or not.",9,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_ready","","Test to see whether this source fulfills any condition listed in `mask` provided.",9,{"inputs":[{"name":"self"},{"name":"ready"}],"output":{"name":"async"}}],[11,"need_read","","Indicates to this source of events that the corresponding I/O object is no longer readable, but it needs to be.",9,{"inputs":[{"name":"self"}],"output":null}],[11,"need_write","","Indicates to this source of events that the corresponding I/O object is no longer writable, but it needs to be.",9,{"inputs":[{"name":"self"}],"output":null}],[11,"remote","","Returns a reference to the event loop handle that this readiness stream is associated with.",9,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"get_ref","","Returns a shared reference to the underlying I/O object this readiness stream is wrapping.",9,{"inputs":[{"name":"self"}],"output":{"name":"e"}}],[11,"get_mut","","Returns a mutable reference to the underlying I/O object this readiness stream is wrapping.",9,{"inputs":[{"name":"self"}],"output":{"name":"e"}}],[11,"read","","",9,null],[11,"write","","",9,null],[11,"flush","","",9,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"shutdown","","",9,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"drop","","",9,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Creates a new timeout which will fire at `dur` time into the future.",10,{"inputs":[{"name":"duration"},{"name":"handle"}],"output":{"name":"result"}}],[11,"new_at","","Creates a new timeout which will fire at the time specified by `at`.",10,{"inputs":[{"name":"instant"},{"name":"handle"}],"output":{"name":"result"}}],[11,"reset","","Resets this timeout to an new timeout which will fire at the time specified by `at`.",10,{"inputs":[{"name":"self"},{"name":"instant"}],"output":null}],[11,"poll_at","","Polls this `Timeout` instance to see if it's elapsed, assuming the current time is specified by `now`.",10,{"inputs":[{"name":"self"},{"name":"instant"}],"output":{"name":"poll"}}],[11,"poll","","",10,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"drop","","",10,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Creates a new interval which will fire at `dur` time into the future, and will repeat every `dur` interval after",11,{"inputs":[{"name":"duration"},{"name":"handle"}],"output":{"name":"result"}}],[11,"new_at","","Creates a new interval which will fire at the time specified by `at`, and then will repeat every `dur` interval after",11,{"inputs":[{"name":"instant"},{"name":"duration"},{"name":"handle"}],"output":{"name":"result"}}],[11,"poll_at","","Polls this `Interval` instance to see if it's elapsed, assuming the current time is specified by `now`.",11,{"inputs":[{"name":"self"},{"name":"instant"}],"output":{"name":"poll"}}],[11,"poll","","",11,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"drop","","",11,{"inputs":[{"name":"self"}],"output":null}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"eq","","",12,{"inputs":[{"name":"self"},{"name":"coreid"}],"output":{"name":"bool"}}],[11,"ne","","",12,{"inputs":[{"name":"self"},{"name":"coreid"}],"output":{"name":"bool"}}],[11,"hash","","",12,null],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"handle"}}],[11,"new","","Creates a new event loop, returning any error that happened during the creation.",15,{"inputs":[],"output":{"name":"result"}}],[11,"handle","","Returns a handle to this event loop which cannot be sent across threads but can be used as a proxy to the event loop itself.",15,{"inputs":[{"name":"self"}],"output":{"name":"handle"}}],[11,"remote","","Generates a remote handle to this event loop which can be used to spawn tasks from other threads into this event loop.",15,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"run","","Runs a future until completion, driving the event loop while we're otherwise waiting for the future to complete.",15,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"turn","","Performs one iteration of the event loop, blocking on waiting for events for at most `max_wait` (forever if `None`).",15,{"inputs":[{"name":"self"},{"name":"option"}],"output":null}],[11,"id","","Get the ID of this loop",15,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"execute","","",15,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"spawn","","Spawns a new future into the event loop this remote is associated with.",13,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"id","","Return the ID of the represented Core",13,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"handle","","Attempts to \"promote\" this remote to a handle, if possible.",13,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"execute","","",13,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"remote","","Returns a reference to the underlying remote handle to the event loop.",14,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"spawn","","Spawns a new future on the event loop this handle is associated with.",14,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"spawn_fn","","Spawns a closure on this event loop.",14,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"id","","Return the ID of the represented Core",14,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"execute","","",14,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"try_nb","tokio_core","A convenience macro for working with `io::Result<T>` from the `Read` and `Write` traits.",null,null]],"paths":[[3,"TcpStream"],[3,"TcpListener"],[3,"Incoming"],[3,"TcpStreamNew"],[3,"UdpFramed"],[3,"UdpSocket"],[3,"SendDgram"],[3,"RecvDgram"],[8,"UdpCodec"],[3,"PollEvented"],[3,"Timeout"],[3,"Interval"],[3,"CoreId"],[3,"Remote"],[3,"Handle"],[3,"Core"]]};
initSearch(searchIndex);
