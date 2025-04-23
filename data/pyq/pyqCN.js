export const set1 = [
  {
    questions: "Which of the following are true about Packet Switching?",
    options: [
      "It is less reliable",
      "It is a store-and-forward technique",
      "Call setup is required",
      "None of these",
    ],
    correctAnswer: "It is a store-and-forward technique",
  },
  {
    questions: "Switches break up collision domains.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    questions:
      "Which of the following switching types is not transparent in terms of data traversal?",
    options: [
      "Context switching",
      "Packet switching",
      "Both a and b",
      "None of these",
    ],
    correctAnswer: "Packet switching",
  },
  {
    questions: "What is the correct sequence of phases in circuit switching?",
    options: [
      "Transfer → Establish → Disconnect",
      "Establish → Connect → Transfer",
      "Establish → Transfer → Disconnect",
      "Transfer → Disconnect → Establish",
    ],
    correctAnswer: "Establish → Transfer → Disconnect",
  },
  {
    questions: "What is a socket address?",
    options: [
      "Either IP address or port number",
      "Combination of IP and MAC address",
      "Combination of port and MAC address",
      "Combination of port and IP address",
    ],
    correctAnswer: "Combination of port and IP address",
  },
  {
    questions:
      "Which protocol resolves domain names (like www.w3.org) into IP addresses?",
    options: ["ARP", "DNS", "RARP", "None of these"],
    correctAnswer: "DNS",
  },
  {
    questions:
      "Which command is used to translate a fully qualified domain name into an IP address using DNS?",
    options: ["iplockup", "ipconfig", "nslookup", "nssearch"],
    correctAnswer: "nslookup",
  },
  {
    questions: "TFTP is built on top of which protocol?",
    options: [
      "Internet Protocol (IP)",
      "File Transfer Protocol (FTP)",
      "Hypertext Transfer Protocol (HTTP)",
      "None of these",
    ],
    correctAnswer: "None of these",
  },
  {
    questions:
      "Which of the following is the correct syntax for an anchor tag in HTML?",
    options: ["<p>...</p>", "<a>...</a>", "<ar>...</ar>", "<b>...</b>"],
    correctAnswer: "<a>...</a>",
  },
  {
    questions:
      "Which port is used by Secure File Transfer Protocol (SFTP) by default?",
    options: ["22", "23", "80", "443"],
    correctAnswer: "22",
  },
  {
    questions:
      "Consider the following statements:\ni) Google Chrome or Internet Explorer can act as HTTP servers.\nii) Apache Tomcat is an HTTP client.",
    options: [
      "Only i is correct",
      "Only ii is correct",
      "Both are correct",
      "None is correct",
    ],
    correctAnswer: "None is correct",
  },
  {
    questions:
      "Consider the following email activities:\nm1: Sending an email from a mail client to a mail server\nm2: Downloading email from a mail server to a mail client\nm3: Checking email in a web browser\nWhich protocols are used?",
    options: [
      "m1: HTTP, m2: SMTP, m3: POP",
      "m1: SMTP, m2: FTP, m3: HTTP",
      "m1: SMTP, m2: POP, m3: HTTP",
      "m1: POP, m2: SMTP, m3: IMAP",
    ],
    correctAnswer: "m1: SMTP, m2: POP, m3: HTTP",
  },
  {
    questions:
      "Which HTTP method requests only the headers of a document without the actual content?",
    options: ["GET", "HEAD", "PUT", "POST"],
    correctAnswer: "HEAD",
  },
  {
    questions:
      "Consider the following SNMPv3 statements:\ni) SNMPv3 ensures message confidentiality.\nii) SNMPv3 does not verify the source of the message.",
    options: [
      "Only i is correct",
      "Only ii is correct",
      "Both are correct",
      "None are correct",
    ],
    correctAnswer: "Only i is correct",
  },
  {
    questions:
      "Which HTTP status code is returned when a document is not found?",
    options: ["400", "402", "404", "503"],
    correctAnswer: "404",
  },
  {
    questions: "Which of the following is NOT an Application Layer protocol?",
    options: ["HTTP", "SFTP", "SNMP", "UDP"],
    correctAnswer: "UDP",
  },
  {
    questions:
      "In a sliding window protocol with a 4-bit sequence number, what is the maximum window size?",
    options: ["16", "15", "8", "32"],
    correctAnswer: "15",
  },
  {
    questions: "Flow control is primarily implemented in which OSI layer?",
    options: [
      "Application Layer",
      "Session Layer",
      "Transport Layer",
      "Physical Layer",
    ],
    correctAnswer: "Transport Layer",
  },
  {
    questions:
      "Consider the following statements about TCP:\ni) Self-clocking ensures unique sequence numbers.\nii) TCP uses self-clocking.",
    options: [
      "Only i is correct",
      "Only ii is correct",
      "Both are correct",
      "None are correct",
    ],
    correctAnswer: "None are correct",
  },
  {
    questions:
      "Which of the following is true about the Go-Back-N ARQ protocol?",
    options: [
      "All segments from 0 to N are retransmitted if segment N is lost",
      "All segments from 0 to N are retransmitted if any segment is lost",
      "All segments from 0 to N−1 are retransmitted if segment N is lost",
      "All segments from 1 to N−1 are retransmitted if segment N is lost",
    ],
    correctAnswer:
      "All segments from 0 to N are retransmitted if segment N is lost",
  },
  {
    questions:
      "In the sliding window protocol, if the sender's window size is 10, how many frames remain in the window after sending 10 frames?",
    options: ["0", "1", "10", "Cannot be determined"],
    correctAnswer: "0",
  },
  {
    questions:
      "Which transport layer protocol provides reliable communication?",
    options: ["ARP", "RARP", "TCP", "UDP"],
    correctAnswer: "TCP",
  },
  {
    questions:
      "The delayed duplicate problem can be resolved using TCP's two-way handshake mechanism.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    questions:
      "What is the maximum sender and receiver window size in Stop-and-Wait protocol?",
    options: ["1", "2", "4", "8"],
    correctAnswer: "1",
  },
  {
    questions:
      "Consider the following statements about Selective Repeat protocol:\ni) Only the lost or erroneous frames are retransmitted\nii) Retransmitted frames are always received in sequence",
    options: [
      "Only i is correct",
      "Only ii is correct",
      "Both are correct",
      "None are correct",
    ],
    correctAnswer: "Only i is correct",
  },
  {
    questions: "In UNIX operating systems, the transport layer is part of:",
    options: ["Hardware", "Firmware", "Kernel", "None of these"],
    correctAnswer: "Kernel",
  },
];

export const set2 = [
  {
    questions:
      "Which of the following statements is/are correct concerning the TCP acknowledgement number?",
    options: [
      "It is a 16 bits number.",
      "It contains the sequence number of the previous bytes the receiver has received.",
      "Both are correct.",
      "None of these.",
    ],
    correctAnswer: "None of these.",
  },
  {
    questions:
      "If the maximum network layer payload size is 2KB, what is the maximum TCP payload size?",
    options: ["2048 bytes", "2028 bytes", "2008 bytes", "1988 bytes"],
    correctAnswer: "2028 bytes",
  },
  {
    questions:
      "Packets of the same session may be routed through different pairs in",
    options: [
      "Both TCP and UDP",
      "Neither TCP nor UDP.",
      "TCP but not UDP.",
      "UDP but not TCP.",
    ],
    correctAnswer: "Both TCP and UDP",
  },
  {
    questions:
      "Which of the following system calls results in the sending of a SYN packet?",
    options: ["Sockets", "Listen", "Bind", "Connect"],
    correctAnswer: "Connect",
  },
  {
    questions:
      "Which of the following statements is/are true for the transport layer?",
    options: [
      "Transport layer protocol should be stateful.",
      "Uses FTP protocol for ensuring flow control.",
      "Both are correct.",
      "None of these.",
    ],
    correctAnswer: "Transport layer protocol should be stateful.",
  },
  {
    questions:
      "Which of the following is helpful to avoid a TCP SYN flood attack? Use of cryptographic function to generate sequence numbers for TCP connection is helpful to avoid?",
    options: [
      "Two way handshaking",
      "Checksum",
      "Cryptographic function",
      "None of these",
    ],
    correctAnswer: "Cryptographic function",
  },
  {
    questions:
      "What is/are the parameters responsible for restricting TCP segment size?",
    options: [
      "IP address.",
      "IP payload.",
      "Maximum transmission unit of the link.",
      "Acknowledgement number field size.",
    ],
    correctAnswer: "IP payload.",
  },
  {
    questions:
      "For effective congestion avoidance, the sending rate of the network should be the minimum of the network rate and receiver rate. The above statement is:",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    questions: "TCP supports broadcasting.",
    options: [
      "The above statement is correct.",
      "The above statement is wrong.",
    ],
    correctAnswer: "The above statement is wrong.",
  },
  {
    questions:
      "Which is the default number for establishing HTTPD (Apache HTTP Server) connection?",
    options: ["43", "44", "443", "None of these"],
    correctAnswer: "None of these",
  },
  {
    questions:
      "i. UDP is the wrapper of the IP layer. ii. TCP is suitable for short message transfer where reliability is not a concern. Which of the above statements is/are correct?",
    options: ["Only i.", "Only ii.", "Both i and ii.", "None of these."],
    correctAnswer: "Only i.",
  },
  {
    questions: "When the select() system call returns zero?",
    options: [
      "Means an error was encountered.",
      "This means the call timed out without any event ready for the socket monitored.",
      "Zero is the number of sockets that have events pending (read, write, exception).",
      "OS kills the process.",
    ],
    correctAnswer:
      "This means the call timed out without any event ready for the socket monitored.",
  },
  {
    questions:
      "When you create a socket as s-socket(domain, type, protocol), why do you set the value of the protocol parameter as zero?",
    options: [
      "The system selects the default protocol number for the domain and socket type requested.",
      "No protocol needed.",
      "Since a computer understands only binary, it can be either 0 or 1.",
      "None of these",
    ],
    correctAnswer:
      "The system selects the default protocol number for the domain and socket type requested.",
  },
  {
    questions: "SOCK_STREAM represents",
    options: [
      "UDP-based datagram protocol.",
      "TCP-based Stream socket.",
      "QUIC-based Stream socket.",
      "None of these",
    ],
    correctAnswer: "TCP-based Stream socket.",
  },
  {
    questions: "Socket address is",
    options: [
      "IPv4 Address translated to IPv6 address",
      "Combination of IP address and port address.",
      "Combination of MAC address and domain address.",
      "Application layer address.",
    ],
    correctAnswer: "Combination of IP address and port address.",
  },
  {
    questions:
      "i. UDP doesn't have any flow control and congestion control mechanism. ii. UDP is suitable for the purpose where error checking and correction is less important than timely delivery. Which of these are correct?",
    options: ["Only i.", "Only ii.", "Both are correct.", "None of these."],
    correctAnswer: "Both are correct.",
  },
  {
    questions: "Packet integrity can be checked using the checksum mechanism.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    questions:
      "Consider the following statement regarding the slow phase of the TCP congestion control algorithm. Note that CWND stands for the TCP congestion window. The CWND increases linearly after every round-trip time till threshold.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    questions:
      "Consider the TCP connection in a state where there are no outstanding ACKs. The sender sends two packets back to back. The sequence number of the first and second are 230 and 290 respectively. The first segment was lost, but the second segment was received correctly by the receiver. Let X be the amount of data carried in the first segment (in bytes) and Y be the ACK number sent by the receiver. The value of X and Y are:",
    options: ["60 and 290", "230 and 291", "60 and 231", "60 and 230"],
    correctAnswer: "60 and 230",
  },
  {
    questions: "In TCP congestion control mechanism is triggered once",
    options: [
      "1 duplicate ACK (DUPACK) is required",
      "After a retransmission timeout (RTO)",
      "3 Duplicate ACK (DUPACK) is received",
      "No duplicate ACK (DUPACK) is received",
    ],
    correctAnswer: "After a retransmission timeout (RTO)",
  },
  {
    questions:
      "If NAT (Network Address Translation) device runs out of address, i.e., no address is left in the pool configured, then the packets will be dropped and an Internet Control Message Protocol (ICMP) host unreachable packet is sent to the destination.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    questions: "What is subnetting?",
    options: [
      "Split a large network into multiple smaller networks",
      "Combine multiple small networks into a single large network.",
      "Enable the network to accept more hosts",
      "Connect a new network to an existing network",
    ],
    correctAnswer: "Split a large network into multiple smaller networks",
  },
  {
    questions:
      "What is the maximum number of networks possible in a Class C IP address?",
    options: ["2^14", "2^24", "2^21", "2^22"],
    correctAnswer: "2^21",
  },
  {
    questions: "Which of the following is/are not a valid IPv6 address?",
    options: [
      "AE82::1:800:23E7:F5DB",
      "FC80:2:7:1:800:23E7:A:F5DB",
      "DE62:6A42:1:5AC::800:23E7:F5DB",
      "FE80:2030:31:24",
    ],
    correctAnswer: "DE62:6A42:1:5AC::800:23E7:F5DB",
  },
  {
    questions: "What is true for Class E?",
    options: [
      "It is used for multitasking",
      "It is reserved for experimental purposes",
      "It is used for a network with numerous hosts.",
      "It is used for a network with fewer hosts",
    ],
    correctAnswer: "It is reserved for experimental purposes",
  },
  {
    questions: "The header length of an IPv6 datagram is",
    options: ["10 bytes", "20 bytes", "30 bytes", "40 bytes"],
    correctAnswer: "40 bytes",
  },
  {
    questions:
      "With the help of the NAT protocol translation technique, IPv4 and IPv6 addresses can also communicate with each other, which do not understand the address of different IP versions.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    questions:
      "We write IP address as 191.180.83.235/12 in CIDR notation. What is the subnet mask?",
    options: ["255.240.0.0", "255.255.255.0", "255.255.240.0", "255.0.0.0"],
    correctAnswer: "255.240.0.0",
  },
  {
    questions: "What is the maximum number of hosts under a Class B address?",
    options: ["254", "65534", "65535", "65536"],
    correctAnswer: "65534",
  },
  {
    questions:
      "If the direct broadcast address of a subnet is 201.15.16.31, which of the following will be the subnet mask?",
    options: [
      "255.255.255.240",
      "255.255.255.192",
      "255.255.255.198",
      "None of these",
    ],
    correctAnswer: "None of these",
  },
];

// set 3

export const set3 = [
  {
    questions:
      "Based on QoS requirement, video conferencing comes under which class of application?",
    options: [
      "Constant bitrate",
      "Real time variable bit rate",
      "Non realtime variable bit rate",
      "Available bitrate or best effort",
    ],
    correctAnswer: "Real time variable bit rate",
  },
  {
    questions: "What is the primary goal of QoS?",
    options: [
      "Control jitter",
      "Degrade loss characteristics",
      "Increase communication latency",
      "None of the above",
    ],
    correctAnswer: "Control jitter",
  },
  {
    questions:
      "Which of the following is an example of traffic scheduling algorithm?",
    options: [
      "Leaky bucket",
      "Token Bucket",
      "Weighted fair queuing (WFQ)",
      "Random fair queuing (RFQ)",
    ],
    correctAnswer: "Weighted fair queuing (WFQ)",
  },
  {
    questions:
      "What is the transmission delay for pushing a packet of size 1MB through a network with a bandwidth of 16 Mbps?",
    options: ["2 seconds", "0.5 seconds", "1 second", "10 seconds"],
    correctAnswer: "0.5 seconds",
  },
  {
    questions: "What is the role of scheduling in basic QoS architecture?",
    options: [
      "It regulates the outgoing traffic rate to control jitter",
      "It marks packet according to their services",
      "Detects which packet violate the QoS and drops them",
      "Maintain queue and prioritize packets into the outgoing buffer as per policy",
    ],
    correctAnswer:
      "Maintain queue and prioritize packets into the outgoing buffer as per policy",
  },
  {
    questions: "Which of the following statement is true?",
    options: [
      "TCP is correct for Inelastic traffic and therefore not preferred for realtime video streaming.",
      "TCP is Elastic traffic and therefore considered for realtime video streaming.",
      "UDP is Inelastic Traffic and therefore preferred for realtime video streaming.",
      "UDP is for Elastic traffic and therefore preferred for realtime video streaming.",
    ],
    correctAnswer:
      "TCP is correct for Inelastic traffic and therefore not preferred for realtime video streaming.",
  },
  {
    questions: "Which of the following is true for admission control?",
    options: [
      "It ensures that new flows are entered in the network only if QoS of all the existing flows along with the new flows can be satisfied.",
      "It ensures data delivery as fast as it is created by sender.",
      "It ensures that a sender is not overwhelming a receiver by sending packets faster than it can consume.",
      "It ensures packet overflow.",
    ],
    correctAnswer:
      "It ensures that new flows are entered in the network only if QoS of all the existing flows along with the new flows can be satisfied.",
  },
  {
    questions:
      "In differential service architecture, what scheduling technique can be used to implement Expedited Forwarding (EF)?",
    options: [
      "Weighted Fair Queuing",
      "Priority Queuing",
      "Custom queuing with different queue size",
      "Combination of Weighted fair queuing and custom queuing with different queue size",
    ],
    correctAnswer: "Priority Queuing",
  },
  {
    questions: "Which of the following is true about TCP?",
    options: [
      "TCP sends traffic at a constant rate",
      "TCP ensures congestion will never occur in the network",
      "TCP is a physical layer protocol",
      "TCP detects congestions and acts accordingly to avoid it",
    ],
    correctAnswer: "TCP detects congestions and acts accordingly to avoid it",
  },
  {
    questions: "Which of the following is true for traffic policing?",
    options: [
      "It is a congestion control mechanism that brings delay in packets",
      "It buffers the packets with rates that are greater than the traffic shaping rate",
      "It is a mechanism that monitors the traffic in any network",
      "It causes delay",
    ],
    correctAnswer: "It is a mechanism that monitors the traffic in any network",
  },
  {
    questions:
      "When you connect your personal computer (end device/ host) to the internet, how does it know/assign its own IP address and gateway IP address to use for sending packets to remote hosts, without any manual configuration?",
    options: [
      "Domain Name System (DNS)",
      "From its own routing table",
      "Address Resolution Protocol (ARP)",
      "Dynamic Host Configuration Protocol (DHCP)",
    ],
    correctAnswer: "Dynamic Host Configuration Protocol (DHCP)",
  },
  {
    questions:
      "Why do we consider dividing IP address into network address and host address?",
    options: [
      "To increase total number of IP Address Possible",
      "So that the router routes the packets based on the host address",
      "To avoid the overhead of storing all possible host IP address in each router",
      "For resolving IP address from domain names",
    ],
    correctAnswer:
      "To avoid the overhead of storing all possible host IP address in each router",
  },
  {
    questions: "Which of the following statements are correct?",
    options: [
      "The internet is a single network controlled by one organization",
      "A transit AS can also be a stub AS",
      "All AS must have the same logical routing algorithm",
      "Distance vector routing and Link state routing protocol are examples of Intradomain routing",
    ],
    correctAnswer:
      "Distance vector routing and Link state routing protocol are examples of Intradomain routing",
  },
  {
    questions:
      "In the BGP protocol, UPDATE and NOTIFICATION messages are used for:",
    options: [
      "Extending reachability information and configuring a BGP connection",
      "Ensuring that a BGP neighbour is still alive and confirming a BGP connection",
      "Exchanging reachability information and to notify an error",
      "Opening a BGP Connection and closing a BGP connection",
    ],
    correctAnswer: "Exchanging reachability information and to notify an error",
  },
  {
    questions: "What is true about BGP routing protocol?",
    options: [
      "It is an Intradomain routing protocol",
      "It is a type of Link state routing protocol",
      "BGP replaces the IGP protocol in an AS",
      "BGP relies on IGP for packet forwarding between IBGP peers",
    ],
    correctAnswer: "BGP relies on IGP for packet forwarding between IBGP peers",
  },
  {
    questions: "BGP communication packet types are:",
    options: [
      "SYNC, OPEN, UPDATE, NOTIFICATION",
      "OPEN, UPDATE, NOTIFICATION, KEEPALIVE",
      "SYNC, FINISH, NOTIFICATION, KEEPALIVE",
      "FINISH, OPEN, UPDATE, NOTIFICATION",
    ],
    correctAnswer: "OPEN, UPDATE, NOTIFICATION, KEEPALIVE",
  },
  {
    questions: "Open Shortest Path First (OSPF) is:",
    options: [
      "Distance vector routing protocol",
      "Link state routing protocol",
      "Path vector routing protocol",
      "Hybrid routing protocol",
    ],
    correctAnswer: "Link state routing protocol",
  },
  {
    questions:
      "Which routing protocol uses the Bellman–Ford algorithm to calculate the best path for forwarding IP packets?",
    options: [
      "Link state routing protocol",
      "Distance vector routing protocol",
      "Hybrid routing protocol",
      "Path vector routing protocol",
    ],
    correctAnswer: "Distance vector routing protocol",
  },
  {
    questions:
      "Consider a network with three routers A, B and C. The routing table for router A has the following entries: (i) 192.168.1.0/24 → B, (ii) 192.168.1.128/28 → D, (iii) 192.168.2.0/24 → C. If router A receives an IP packet with a destination address of 192.168.1.10, what will be the next hop?",
    options: ["D", "B", "C", "None of these"],
    correctAnswer: "B",
  },
];

export const set4 = [
  {
    questions: "What is the purpose of a routing table in IP routing?",
    options: [
      "To store the MAC address of connected devices.",
      "To store the IP address of all connected devices in the network.",
      "To store the information about the best path to reach the destination network.",
      "To store DNS mapping of domain names to IP address.",
    ],
    correctAnswer:
      "To store the information about the best path to reach the destination network.",
  },
  {
    questions: "What is the role of forwarding plane in an SDN architecture?",
    options: [
      "To configure network devices based on controller commands.",
      "To manages and control flow of data packets into the network.",
      "To handle the exchange of control messages between SDN components.",
      "To forward data packets based on instructions from the control plane.",
    ],
    correctAnswer:
      "To forward data packets based on instructions from the control plane.",
  },
  {
    questions: "What is the primary benefit of using SDN in a network?",
    options: [
      "Improved network security.",
      "Increased network bandwidth.",
      "Simplified network management and automation.",
      "Enhanced Quality of Service (QoS)",
    ],
    correctAnswer: "Simplified network management and automation.",
  },
  {
    questions:
      "Which SDN protocol is used to communicate between the SDN controller and the network devices to program forwarding behaviour?",
    options: ["OSPF", "OpenFlow", "BGP", "ICMP"],
    correctAnswer: "OpenFlow",
  },
  {
    questions: "What is the purpose of default route in a routing table?",
    options: [
      "To define a backup path a destination network.",
      "To provide a route for packets with unknown destination address.",
      "To provide certain types of traffic over other.",
      "To load balanced traffic over multiple paths.",
    ],
    correctAnswer:
      "To provide a route for packets with unknown destination address.",
  },
  {
    questions:
      "How does SDN differ from traditional networking in terms of network configuration and management?",
    options: [
      "SDN uses centralized and programmability, while traditional networking uses distributed control and manual configuration.",
      "SDN uses distributed control and manual configuration, while traditional networking uses centralized control and programmability.",
      "SDN and traditional networking both use centralized control and programmability.",
      "SDN and traditional networking both use distributed control and manual configuration.",
    ],
    correctAnswer:
      "SDN uses centralized and programmability, while traditional networking uses distributed control and manual configuration.",
  },
  {
    questions:
      "Which routing algorithm is used in SDN to compute original path for data packets?",
    options: [
      "Dijkstra's algorithm",
      "Bellman-Ford algorithm",
      "Floyd-Warshall algorithm",
      "A* algorithm",
    ],
    correctAnswer: "Dijkstra's algorithm",
  },
  {
    questions: "How does SDN facilitate network virtualization?",
    options: [
      "By allowing multiple physical network to be controlled by a single SDN controller.",
      "By creating virtual instances of network devices, such as switches and routers.",
      "By enabling the creation of virtual networks that operate independently from the physical network infrastructure.",
      "By providing a virtualized control panel that abstracts the underlying network topology.",
    ],
    correctAnswer:
      "By enabling the creation of virtual networks that operate independently from the physical network infrastructure.",
  },
  {
    questions: "What role does southbound interface play in SDN architecture?",
    options: [
      "To enable communication between the SDN controller and network devices.",
      "To provide a standardized interface for the application to interact with SDN controller.",
      "It controls the flow of data packets within the network.",
      "It manages the exchange of control messages between SDN components.",
    ],
    correctAnswer:
      "To enable communication between the SDN controller and network devices.",
  },
  {
    questions:
      "How does SDN improve network scalability compared to traditional networking?",
    options: [
      "By enabling dynamic allocation of resources based on demand.",
      "By increasing the number of physical devices in the network.",
      "By reducing the need for manual configuration of network devices.",
      "By improving the efficiency of network protocols.",
    ],
    correctAnswer:
      "By enabling dynamic allocation of resources based on demand.",
  },
  {
    questions:
      "What is the primary function of data link layer in the OSI model?",
    options: [
      "To provide end-to-end socket connection.",
      "To establish, maintain and terminate connection between devices.",
      "To regulate the flow of data between the sender and receiver.",
      "To manage access to the physical network medium.",
    ],
    correctAnswer: "To manage access to the physical network medium.",
  },
  {
    questions: "Which is not one of the LLC services?",
    options: [
      "Connection mode service",
      "Acknowledged connectionless service",
      "Intermediate switching service",
      "Unacknowledged connectionless service",
    ],
    correctAnswer: "Intermediate switching service",
  },
  {
    questions:
      "Every station connected to an Ethernet network is provided a 6-byte physical address by:",
    options: [
      "The firmware",
      "The network interface card",
      "The internet service provider",
      "None of these",
    ],
    correctAnswer: "The network interface card",
  },
  {
    questions:
      "When 2 or more bits of a data unit have been changed during transmission, the error is called:",
    options: ["Random error", "Burst error", "Inverted error", "Double error"],
    correctAnswer: "Burst error",
  },
  {
    questions:
      "Which sublayer of the data link layer performs functions depending on the type of medium?",
    options: [
      "Logical link control sublayer",
      "Media access control sublayer",
      "Network Interface control sublayer",
      "Error control sublayer",
    ],
    correctAnswer: "Media access control sublayer",
  },
  {
    questions:
      "In carrier sense multiple access/collision detection, the sending station must detect:",
    options: ["Collision", "Signal", "Sense", "Station"],
    correctAnswer: "Collision",
  },
  {
    questions:
      "In Go-Back-N ARQ, if the sequence number is represented by 4 bits, the sender and receiver window size should be:",
    options: ["16, 16", "8, 1", "15, 15", "15, 1"],
    correctAnswer: "15, 1",
  },
  {
    questions:
      "In Go-Back-N ARQ, if the window size is 63, what is the range of sequence number?",
    options: ["1 to 63", "1 to 64", "0 to 63", "0 to 64"],
    correctAnswer: "0 to 63",
  },
  {
    questions:
      "A network using CSMA/CD has a bandwidth of 10 Mbps. If the max propagation time is 25.6 microseconds, what is the minimum frame size?",
    options: ["128 bytes", "32 bytes", "16 bytes", "64 bytes"],
    correctAnswer: "64 bytes",
  },
  {
    questions:
      "When an acknowledgement is lost during the Go-Back-N ARQ, the receiver retransmits the acknowledgement after a moment.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
];

export const set5 = [
  {
    questions:
      "What is the purpose of the ARP cache Table in a networking device?",
    options: [
      "To store IP address of all the devices in the network",
      "To store the MAC address of all the devices in the network",
      "To store the recently resolved mapping of IP address to MAC address",
      "To store the routing information for the network",
    ],
    correctAnswer:
      "To store the recently resolved mapping of IP address to MAC address",
  },
  {
    questions: "Which statement is true about Reverse ARP (RARP)?",
    options: [
      "RARP is used to map MAC address to IP address",
      "RARP replies an unicast",
      "RARP is primarily used in routers",
      "None of these",
    ],
    correctAnswer: "RARP is used to map MAC address to IP address",
  },
  {
    questions:
      "Which protocol is used for loop avoidance in a LAN environment?",
    options: ["ARP", "DHCP", "STP", "BGP"],
    correctAnswer: "STP",
  },
  {
    questions: "What is the purpose of VLAN trunking in a LAN?",
    options: [
      "To connect multiple LAN together",
      "To separate traffics from different VLANs on the same physical links",
      "To increase the bandwidth of a single VLAN",
      "To improve the security of LAN",
    ],
    correctAnswer:
      "To separate traffics from different VLANs on the same physical links",
  },
  {
    questions:
      "What is the mandatory access method supported by all implementations of IEEE 802.11 WLANs?",
    options: ["DCP", "PCF", "Both DCP and PCF", "None of these"],
    correctAnswer: "DCP",
  },
  {
    questions:
      "Which frame type is periodically sent by a base station in a PCF based WLAN?",
    options: ["CTS", "RTS", "Beacon frame", "None of these"],
    correctAnswer: "Beacon frame",
  },
  {
    questions:
      "Which IEEE standard specifies the MAC and physical layer specification for WLANs?",
    options: ["IEEE 802.16", "IEEE 802.3", "IEEE 802.11", "IEEE 802.15"],
    correctAnswer: "IEEE 802.11",
  },
  {
    questions:
      "In an IEEE 802.11 WLAN, what problem does the hidden terminal problem refer to?",
    options: [
      "Two senders are in communication range of each other",
      "Two senders are not in the communication range of each other",
      "The range of the sender is independent of the receiver",
      "None of these",
    ],
    correctAnswer:
      "Two senders are not in the communication range of each other",
  },
  {
    questions: "Bridge can operate on which of the following layer?",
    options: [
      "Physical layer and Data link layer",
      "Physical and Sessional layer",
      "Application and Data link layer",
      "Physical and Presentation layer",
    ],
    correctAnswer: "Physical layer and Data link layer",
  },
  {
    questions:
      "A switch has been configured for three VLANs. What type of interface is required on the router for single connection to the switch?",
    options: [
      "10 Mbps Ethernet",
      "56 Kbps Serial",
      "100 Mbps Ethernet",
      "1 Gbps Ethernet",
    ],
    correctAnswer: "100 Mbps Ethernet",
  },
  {
    questions:
      "What is the purpose of digital modulation in transmitting data?",
    options: [
      "To convert analog to digital signal",
      "To increase data rates",
      "To convert digital signal to analog signal",
      "To encode digital bits into analog bits",
    ],
    correctAnswer: "To encode digital bits into analog bits",
  },
  {
    questions:
      "How does Manchester coding differ from Differential Manchester coding?",
    options: [
      "Manchester uses transitions to represent bits, while Differential Manchester uses the absence of transition",
      "Manchester uses transitions to represent bits, Differential Manchester uses specific transition to represent 1s and 0s",
      "Manchester encodes bits based on their position, Differential Manchester uses mid-point transitions",
      "They are the same",
    ],
    correctAnswer:
      "Manchester uses transitions to represent bits, Differential Manchester uses specific transition to represent 1s and 0s",
  },
  {
    questions:
      "For a noiseless channel with 1MHz bandwidth and 4 Mbps desired bit rate, what is the required number of signal levels?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
  },
  {
    questions:
      "What is the bandwidth of a signal with frequencies ranging from 100 Hz to 500 Hz?",
    options: ["100 Hz", "400 Hz", "500 Hz", "600 Hz"],
    correctAnswer: "400 Hz",
  },
  {
    questions:
      "Which of the following is not a cause of transmission impairment?",
    options: ["Attenuation", "Noise", "Distortion", "Congestion"],
    correctAnswer: "Congestion",
  },
  {
    questions: "What does SSL stand for in the SSL/TLS protocol?",
    options: [
      "Secure Service Layer",
      "Safe Socket Layer",
      "Secure Socket Layer",
      "Standalone Security Layer",
    ],
    correctAnswer: "Secure Socket Layer",
  },
  {
    questions: "Which of the following is not a function of an HTTP proxy?",
    options: [
      "Serving as a rudimentary firewall",
      "Translating private IP address into public IP address",
      "Allow or deny access based on content and location",
      "Efficient utilization of bandwidth through caching",
    ],
    correctAnswer: "Translating private IP address into public IP address",
  },
  {
    questions:
      "If there are n signal sources of the same data rate, then the TDM link has how many slots?",
    options: ["n", "n/2", "n*2", "2n"],
    correctAnswer: "n",
  },
  {
    questions:
      "Which of the following attack can actively modify communication or data?",
    options: [
      "Both active and passive attack",
      "Neither active nor passive attack",
      "Active attack",
      "Passive attack",
    ],
    correctAnswer: "Active attack",
  },
  {
    questions: "Guard band increases the bandwidth for:",
    options: ["FDM", "TDM", "CDM", "None of these"],
    correctAnswer: "FDM",
  },
];
