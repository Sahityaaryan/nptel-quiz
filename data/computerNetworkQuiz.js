// subtopics

export const Network_Security = [
  {
    questions: "What are the three basic components of security?",
    options: [
      "Confidentiality, Integrity, Availability",
      "Confidentiality, Authentication, Access",
      "Authentication, Privacy, Control",
      "Access, Privacy, Confidentiality",
    ],
    correctAnswer: "Confidentiality, Integrity, Availability",
  },
  {
    questions: "Which of the following is an example of a passive attack?",
    options: ["Masquerade", "Replay", "Modification", "Traffic analysis"],
    correctAnswer: "Traffic analysis",
  },
  {
    questions:
      "Which attack involves a false identity to gain unauthorized access?",
    options: ["Replay", "Masquerade", "Denial of Service", "Modification"],
    correctAnswer: "Masquerade",
  },
  {
    questions: "What does a security policy define?",
    options: [
      "The list of vulnerabilities in a system",
      "The rules for detecting attacks",
      "What is and is not allowed in the system",
      "The mechanisms used to enforce firewall rules",
    ],
    correctAnswer: "What is and is not allowed in the system",
  },
  {
    questions: "Which is NOT a type of active attack?",
    options: ["Denial of Service", "Replay", "Snooping", "Masquerade"],
    correctAnswer: "Snooping",
  },
  {
    questions:
      "Which of the following security goals involves fixing damage and resuming functionality?",
    options: ["Prevention", "Detection", "Recovery", "Verification"],
    correctAnswer: "Recovery",
  },
  {
    questions: "Which class of threat is associated with snooping?",
    options: ["Usurpation", "Disclosure", "Deception", "Disruption"],
    correctAnswer: "Disclosure",
  },
  {
    questions: "Which of the following is a human-related security issue?",
    options: [
      "Firewall misconfiguration",
      "Packet sniffing",
      "Social engineering",
      "Command injection",
    ],
    correctAnswer: "Social engineering",
  },
  {
    questions: "What does NAT primarily help with?",
    options: [
      "Data encryption",
      "IP address pooling and conservation",
      "Authentication",
      "Traffic monitoring",
    ],
    correctAnswer: "IP address pooling and conservation",
  },
  {
    questions: "Which of the following is a commonly used proxy server?",
    options: ["iptables", "Snort", "Squid", "Nessus"],
    correctAnswer: "Squid",
  },
  {
    questions: "Which protocol suite provides security at the network layer?",
    options: ["SSL", "TLS", "IPSec", "SSH"],
    correctAnswer: "IPSec",
  },
  {
    questions:
      "Which of the following is NOT a phase in the penetration testing methodology?",
    options: [
      "Enumeration",
      "Escalation",
      "Authentication",
      "Information gathering",
    ],
    correctAnswer: "Authentication",
  },
  {
    questions:
      "Which firewall type inspects packets based only on header information?",
    options: [
      "Application-level Gateway",
      "Circuit-level Gateway",
      "Packet filter",
      "Proxy server",
    ],
    correctAnswer: "Packet filter",
  },
  {
    questions: "What is the key purpose of a proxy server?",
    options: [
      "Provides virus protection",
      "Acts as a relay between clients and servers",
      "Encrypts all network traffic",
      "Stores user credentials",
    ],
    correctAnswer: "Acts as a relay between clients and servers",
  },
  {
    questions:
      "Which attack results from capturing and retransmitting a data unit?",
    options: ["Masquerade", "Replay", "Spoofing", "Denial of Service"],
    correctAnswer: "Replay",
  },
  {
    questions:
      "Which of the following is the first step in securing a network?",
    options: [
      "Installing firewalls",
      "Running vulnerability scans",
      "Determining security policy",
      "Performing penetration testing",
    ],
    correctAnswer: "Determining security policy",
  },
  {
    questions:
      "Which of the following tools is commonly used for IDS purposes?",
    options: ["iptables", "Nessus", "Snort", "Metasploit"],
    correctAnswer: "Snort",
  },
  {
    questions: "What is the main goal of a firewall?",
    options: [
      "Analyze network performance",
      "Block all traffic to the local network",
      "Control traffic and enforce security policy",
      "Translate domain names",
    ],
    correctAnswer: "Control traffic and enforce security policy",
  },
  {
    questions: "What does assurance in network security involve?",
    options: [
      "Enforcing firewall policies only",
      "Analysis of source IPs",
      "Specification, design, and implementation",
      "Risk evaluation only",
    ],
    correctAnswer: "Specification, design, and implementation",
  },
  {
    questions: "Which proxy server feature helps improve bandwidth efficiency?",
    options: [
      "Cache management",
      "IP masking",
      "Packet inspection",
      "NAT integration",
    ],
    correctAnswer: "Cache management",
  },
];

// OSI
export const OSI_Model = [
  {
    questions: "Which layer of the OSI model is responsible for routing?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Session Layer",
      "Data Link Layer",
    ],
    correctAnswer: "Network Layer",
  },
  {
    questions: "What is the main function of the Transport Layer?",
    options: [
      "Routing",
      "Flow control and error recovery",
      "Encoding and encryption",
      "Frame synchronization",
    ],
    correctAnswer: "Flow control and error recovery",
  },
  {
    questions: "Which OSI layer is responsible for encryption and compression?",
    options: [
      "Transport Layer",
      "Presentation Layer",
      "Session Layer",
      "Data Link Layer",
    ],
    correctAnswer: "Presentation Layer",
  },
  {
    questions: "Which layer establishes, manages, and terminates sessions?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Session Layer",
      "Presentation Layer",
    ],
    correctAnswer: "Session Layer",
  },
  {
    questions: "Which layer is responsible for end-to-end delivery?",
    options: [
      "Data Link Layer",
      "Transport Layer",
      "Network Layer",
      "Session Layer",
    ],
    correctAnswer: "Transport Layer",
  },
  {
    questions: "Which OSI layer breaks up data into frames?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Transport Layer",
      "Network Layer",
    ],
    correctAnswer: "Data Link Layer",
  },
  {
    questions: "Which of the following is a Layer 2 device?",
    options: ["Router", "Bridge", "Repeater", "Gateway"],
    correctAnswer: "Bridge",
  },
  {
    questions:
      "Which layer translates data into a format that the application layer can accept?",
    options: [
      "Presentation Layer",
      "Network Layer",
      "Transport Layer",
      "Session Layer",
    ],
    correctAnswer: "Presentation Layer",
  },
  {
    questions: "The Application Layer provides services directly to:",
    options: ["Hardware", "User applications", "Routers", "Operating systems"],
    correctAnswer: "User applications",
  },
  {
    questions: "What layer does IP operate at in the OSI model?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Application Layer",
    ],
    correctAnswer: "Network Layer",
  },
];

export const Network_Protocol_Stack = [
  {
    question:
      "Which layer of the network protocol stack includes protocols like HTTP, FTP, and SMTP?",
    options: [
      "Transport Layer",
      "Application Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    correctAnswer: "Application Layer",
  },
  {
    question:
      "Which transport layer protocol is connection-oriented and reliable?",
    options: ["UDP", "TCP", "RTP", "IP"],
    correctAnswer: "TCP",
  },
  {
    question:
      "Which network layer protocol is responsible for addressing and routing packets?",
    options: ["TCP", "IP", "FTP", "Ethernet"],
    correctAnswer: "IP",
  },
  {
    question:
      "What device provides hosts with access to media using MAC addresses?",
    options: ["Switch", "Router", "NIC", "Hub"],
    correctAnswer: "NIC",
  },
  {
    question: "What year was Google founded?",
    options: ["1994", "1995", "1996", "1998"],
    correctAnswer: "1998",
  },
  {
    question:
      "Which device operates only at the physical layer and does not filter traffic?",
    options: ["Hub", "Switch", "Router", "Bridge"],
    correctAnswer: "Hub",
  },
  {
    question:
      "Which of the following breaks up broadcast and collision domains?",
    options: ["Switch", "Router", "NIC", "Repeater"],
    correctAnswer: "Router",
  },
  {
    question:
      "What is the function of the access layer in hierarchical design?",
    options: [
      "Handles routing across the internetwork",
      "Provides end-user connectivity",
      "Provides policy-based routing",
      "Performs load balancing",
    ],
    correctAnswer: "Provides end-user connectivity",
  },
  {
    question:
      "Which device connects different network segments and filters traffic based on MAC addresses?",
    options: ["Hub", "Bridge", "Router", "Repeater"],
    correctAnswer: "Bridge",
  },
  {
    question:
      "Which protocol suite dominates inter-networking and forms the basis of the Internet?",
    options: ["HTTP/SMTP", "TCP/IP", "FTP/UDP", "ICQ/IMAP"],
    correctAnswer: "TCP/IP",
  },
  {
    question:
      "Which layer handles the transmission of raw bits over a communication link?",
    options: [
      "Application Layer",
      "Network Layer",
      "Physical Layer",
      "Data Link Layer",
    ],
    correctAnswer: "Physical Layer",
  },
  {
    question: "What is the main function of a switch in a network?",
    options: [
      "To route packets between networks",
      "To amplify signals",
      "To forward frames between LAN ports",
      "To assign IP addresses",
    ],
    correctAnswer: "To forward frames between LAN ports",
  },
  {
    question: "What does DNS stand for?",
    options: [
      "Digital Network System",
      "Domain Name System",
      "Data Network Service",
      "Distributed Network Switching",
    ],
    correctAnswer: "Domain Name System",
  },
  {
    question: "What year was the Java source code released?",
    options: ["1994", "1995", "1996", "1998"],
    correctAnswer: "1995",
  },
  {
    question:
      "Which switching method involves setting up a dedicated communication path?",
    options: [
      "Packet Switching",
      "Circuit Switching",
      "Virtual Switching",
      "IP Switching",
    ],
    correctAnswer: "Circuit Switching",
  },
  {
    question: "In which switching method can packets arrive out of order?",
    options: [
      "Circuit Switching",
      "Packet Switching – Datagram",
      "Packet Switching – Virtual Circuit",
      "Time-Division Switching",
    ],
    correctAnswer: "Packet Switching – Datagram",
  },
  {
    question:
      "Which is a key advantage of packet switching over circuit switching?",
    options: [
      "Guaranteed bandwidth",
      "Dedicated path",
      "More efficient use of bandwidth",
      "Fixed data rate",
    ],
    correctAnswer: "More efficient use of bandwidth",
  },
  {
    question: "Which of the following is NOT a top-level domain?",
    options: [".org", ".com", ".edu", ".sys"],
    correctAnswer: ".sys",
  },
  {
    question: "What does MAC stand for in networking?",
    options: [
      "Memory Access Control",
      "Media Access Control",
      "Multiple Access Channel",
      "Master Access Channel",
    ],
    correctAnswer: "Media Access Control",
  },
  {
    question:
      "What type of switching node connects stations and other switching nodes?",
    options: ["Router", "Switching Node", "Bridge", "NIC"],
    correctAnswer: "Switching Node",
  },
  {
    question:
      "Which protocol is used by routers to download configuration files or IOS images?",
    options: ["FTP", "SMTP", "TFTP", "HTTP"],
    correctAnswer: "TFTP",
  },
  {
    question: "What is the unit of data exchanged in the network layer?",
    options: ["Frame", "Packet", "Bit", "Segment"],
    correctAnswer: "Packet",
  },
  {
    question:
      "Which protocol provides a reliable, connection-oriented service?",
    options: ["UDP", "TFTP", "TCP", "IP"],
    correctAnswer: "TCP",
  },
  {
    question: "What is the responsibility of the Application Layer?",
    options: [
      "Routing packets",
      "Establishing communication with other applications",
      "Transmitting raw bits",
      "Switching frames",
    ],
    correctAnswer: "Establishing communication with other applications",
  },
  {
    question: "What was the first web-based email service launched in 1994?",
    options: ["Gmail", "Outlook", "Hotmail", "Yahoo Mail"],
    correctAnswer: "Hotmail",
  },
  {
    question:
      "Which device filters traffic and forwards packets based on IP addresses?",
    options: ["Hub", "Router", "Switch", "NIC"],
    correctAnswer: "Router",
  },
  {
    question:
      "What switching approach establishes a route before sending packets?",
    options: [
      "Datagram",
      "Virtual Circuit",
      "Time-Division",
      "Store-and-Forward",
    ],
    correctAnswer: "Virtual Circuit",
  },
  {
    question:
      "Which protocol uses UDP and is designed to be lightweight and simple?",
    options: ["FTP", "TFTP", "TCP", "SMTP"],
    correctAnswer: "TFTP",
  },
  {
    question: "Which layer collects a stream of bits into frames?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Application Layer",
    ],
    correctAnswer: "Data Link Layer",
  },
  {
    question: "Which top-level domain is used for educational institutions?",
    options: [".edu", ".org", ".gov", ".com"],
    correctAnswer: ".edu",
  },
];

// aplication layer DNS
export const Application_Layer_DNS = [
  {
    question: "What is the role of the Application Layer in the OSI model?",
    options: [
      "Handles encryption and compression",
      "Manages data routing and switching",
      "Provides network services to end-user applications",
      "Ensures reliable transmission of data",
    ],
    answer: "Provides network services to end-user applications",
  },
  {
    question:
      "Which of the following is an example of an Application Layer service?",
    options: ["IP Routing", "DNS", "Packet Switching", "MAC Address Filtering"],
    answer: "DNS",
  },
  {
    question: "What is the function of DNS?",
    options: [
      "To manage IP address allocation",
      "To resolve domain names to IP addresses",
      "To block malware domains",
      "To encrypt internet traffic",
    ],
    answer: "To resolve domain names to IP addresses",
  },
  {
    question: "What is a Fully Qualified Domain Name (FQDN)?",
    options: [
      "Only the domain part",
      "Hostname + domain name + TLD with a trailing dot",
      "Just the hostname",
      "The root name only",
    ],
    answer: "Hostname + domain name + TLD with a trailing dot",
  },
  {
    question: "Which of the following is a generic TLD?",
    options: [".uk", ".com", ".cat", ".in"],
    answer: ".cat",
  },
  {
    question: "Which TLD is used by educational institutions?",
    options: [".org", ".edu", ".info", ".net"],
    answer: ".edu",
  },
  {
    question: "What is the role of a Secondary DNS server?",
    options: [
      "It creates a new zone automatically",
      "It maintains a copy of the primary DNS zone",
      "It initiates all client DNS queries",
      "It stores backup email addresses",
    ],
    answer: "It maintains a copy of the primary DNS zone",
  },
  {
    question:
      "What type of DNS resolution involves querying one server at a time?",
    options: ["Recursive", "Iterative", "Hierarchical", "Parallel"],
    answer: "Iterative",
  },
  {
    question: "What command is commonly used to perform DNS lookups?",
    options: ["traceroute", "netstat", "nslookup", "ipconfig"],
    answer: "nslookup",
  },
  {
    question: "Which port number is used by DNS?",
    options: ["53", "80", "21", "69"],
    answer: "53",
  },
  {
    question: "What is the function of the 'SOA' record in DNS?",
    options: [
      "Specifies mail server",
      "Defines alias for domain",
      "Indicates the start of a zone",
      "Maps hostname to IP",
    ],
    answer: "Indicates the start of a zone",
  },
  {
    question: "Which of the following is a DNS Resource Record type?",
    options: ["SMTP", "CNAME", "HTTP", "SSL"],
    answer: "CNAME",
  },
  {
    question: "Which protocol is used by FTP for data transmission?",
    options: ["UDP", "TCP", "ICMP", "DNS"],
    answer: "TCP",
  },
  {
    question: "What port number is used for FTP control connection?",
    options: ["20", "21", "69", "53"],
    answer: "21",
  },
  {
    question: "Which FTP command is used to retrieve a file from the server?",
    options: ["STOR", "RETR", "APPE", "PUT"],
    answer: "RETR",
  },
  {
    question: "Which FTP command is used to print the current directory?",
    options: ["PWD", "LIST", "CWD", "MKD"],
    answer: "PWD",
  },
  {
    question: "Which of the following best describes TFTP?",
    options: [
      "Secure and reliable file transfer",
      "Simple file transfer using UDP without authentication",
      "Used for web hosting",
      "Uses TCP for control and data",
    ],
    answer: "Simple file transfer using UDP without authentication",
  },
  {
    question: "What port number does TFTP use?",
    options: ["20", "21", "69", "80"],
    answer: "69",
  },
  {
    question: "Which FTP command is used to delete a file?",
    options: ["DELE", "RMD", "CWD", "RM"],
    answer: "DELE",
  },
  {
    question:
      "Which of the following represents a correct client-server model?",
    options: [
      "Server requests and client provides data",
      "Client requests and server provides data",
      "Both client and server provide data to each other",
      "Server always acts as a client",
    ],
    answer: "Client requests and server provides data",
  },
  {
    question: "What does a socket consist of?",
    options: [
      "MAC address only",
      "Protocol, Source IP & Port, Destination IP & Port",
      "Only destination IP",
      "Protocol and port only",
    ],
    answer: "Protocol, Source IP & Port, Destination IP & Port",
  },
  {
    question: "What is the function of a stub resolver?",
    options: [
      "A core DNS server",
      "Part of OS that performs basic DNS queries",
      "Handles zone transfers",
      "Creates primary zones",
    ],
    answer: "Part of OS that performs basic DNS queries",
  },
  {
    question: "Which of these is a data formatting command in FTP?",
    options: ["TYPE", "LIST", "RETR", "PWD"],
    answer: "TYPE",
  },
  {
    question: "What is the function of the FTP DTP process?",
    options: [
      "Handles user authentication",
      "Transfers file data during a session",
      "Executes commands like LIST or PWD",
      "Monitors connection health",
    ],
    answer: "Transfers file data during a session",
  },
  {
    question: "What is a domain in DNS terminology?",
    options: [
      "Only a top-level name",
      "A set of names under an organization",
      "Only the IP address",
      "A synonym for zone",
    ],
    answer: "A set of names under an organization",
  },
];

// Application Layer

export const Application_Layer = [
  {
    questions: "What is the default port number for HTTP?",
    options: ["21", "23", "80", "53"],
    correctAnswer: "80",
  },
  {
    questions:
      "Which HTTP version introduced persistent connections by default?",
    options: ["1.0", "1.1", "2.0", "3.0"],
    correctAnswer: "1.1",
  },
  {
    questions:
      "Which HTTP method is used to retrieve data from a server without modifying it?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctAnswer: "GET",
  },
  {
    questions: "Which status code indicates that the request succeeded?",
    options: ["200", "404", "500", "403"],
    correctAnswer: "200",
  },
  {
    questions: "What does the 'User-Agent' header in HTTP specify?",
    options: [
      "The requested URI",
      "Client software info (e.g., browser)",
      "Preferred language",
      "Authentication credentials",
    ],
    correctAnswer: "Client software info (e.g., browser)",
  },
  {
    questions:
      "Which command is used to send credentials for authentication in HTTP?",
    options: ["Authorization", "Host", "Accept", "Connection"],
    correctAnswer: "Authorization",
  },
  {
    questions: "Which header defines how a response body is encoded in HTTP?",
    options: ["Content-type", "Content-encoding", "ETag", "Age"],
    correctAnswer: "Content-encoding",
  },
  {
    questions: "Which HTML tag is used to create hyperlinks?",
    options: ["<h1>", "<a>", "<p>", "<div>"],
    correctAnswer: "<a>",
  },
  {
    questions: "What is the file extension used for HTML files?",
    options: [".html or .htm", ".php", ".xml", ".css"],
    correctAnswer: ".html or .htm",
  },
  {
    questions: "What is the purpose of TELNET?",
    options: [
      "To send email",
      "To manage DNS",
      "Remote login to another system",
      "Download web pages",
    ],
    correctAnswer: "Remote login to another system",
  },
  {
    questions: "What port does TELNET use?",
    options: ["21", "23", "25", "53"],
    correctAnswer: "23",
  },
  {
    questions:
      "Which command in TELNET is used to test if a connection is alive?",
    options: ["IP", "AYT", "EC", "AO"],
    correctAnswer: "AYT",
  },
  {
    questions: "What is the starting byte for TELNET commands?",
    options: ["IAC (255)", "ACK (6)", "SYN (2)", "FIN (1)"],
    correctAnswer: "IAC (255)",
  },
  {
    questions: "What protocol does SMTP use?",
    options: ["UDP", "TCP", "ICMP", "ARP"],
    correctAnswer: "TCP",
  },
  {
    questions: "Which SMTP component prepares the message?",
    options: [
      "Mail Transfer Agent",
      "Mail Gateway",
      "User Agent",
      "POP3 Client",
    ],
    correctAnswer: "User Agent",
  },
  {
    questions:
      "Which extension allows SMTP to send non-ASCII data like images?",
    options: ["TLS", "POP3", "MIME", "IMAP"],
    correctAnswer: "MIME",
  },
  {
    questions: "Which SNMP component stores managed objects?",
    options: ["SNMP Manager", "SNMP Agent", "MIB", "OID"],
    correctAnswer: "MIB",
  },
  {
    questions: "Which SNMP operation is asynchronous?",
    options: ["Get-request", "Set-request", "Trap", "Get-response"],
    correctAnswer: "Trap",
  },
  {
    questions: "Which SNMP version adds authentication and encryption?",
    options: ["v1", "v2c", "v3", "v4"],
    correctAnswer: "v3",
  },
  {
    questions: "Which HTTP status code means 'Not Found'?",
    options: ["400", "401", "404", "403"],
    correctAnswer: "404",
  },
  {
    questions: "Which HTTP method sends data to the server for processing?",
    options: ["HEAD", "POST", "OPTIONS", "TRACE"],
    correctAnswer: "POST",
  },
  {
    questions: "What does the HTTP header 'Expires' specify?",
    options: [
      "File format",
      "Date after which the content is considered stale",
      "MIME version",
      "Date/time request was made",
    ],
    correctAnswer: "Date after which the content is considered stale",
  },
  {
    questions: "Which HTTP method is used to echo back the received request?",
    options: ["TRACE", "OPTIONS", "HEAD", "CONNECT"],
    correctAnswer: "TRACE",
  },
  {
    questions:
      "Which HTTP status code indicates that authentication is required?",
    options: ["401", "403", "400", "405"],
    correctAnswer: "401",
  },
  {
    questions: "Which SNMP operation is used to fetch values of an object?",
    options: ["Set-request", "Get-response", "Trap", "Get-request"],
    correctAnswer: "Get-request",
  },
];

// Transport Layer - 1
export const Transport_Layer = [
  {
    question:
      "Which layer is responsible for end-to-end communication between hosts?",
    answers: [
      { text: "Network Layer", correct: false },
      { text: "Transport Layer", correct: true },
      { text: "Data Link Layer", correct: false },
      { text: "Physical Layer", correct: false },
    ],
  },
  {
    question: "Which of the following protocols is connection-oriented?",
    answers: [
      { text: "UDP", correct: false },
      { text: "TCP", correct: true },
      { text: "IP", correct: false },
      { text: "ICMP", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 3-way handshake in TCP?",
    answers: [
      {
        text: "To send data in both directions simultaneously",
        correct: false,
      },
      { text: "To increase throughput", correct: false },
      { text: "To establish and synchronize sequence numbers", correct: true },
      { text: "To acknowledge packet receipt", correct: false },
    ],
  },
  {
    question: "In the protocol stack, which layer adds the IP header?",
    answers: [
      { text: "Transport Layer", correct: false },
      { text: "Network Layer", correct: true },
      { text: "Data Link Layer", correct: false },
      { text: "Application Layer", correct: false },
    ],
  },
  {
    question: "What is the function of the sliding window protocol?",
    answers: [
      { text: "Encrypts messages", correct: false },
      { text: "Manages simultaneous user logins", correct: false },
      { text: "Controls flow and ensures reliable delivery", correct: true },
      { text: "Adjusts the physical signal strength", correct: false },
    ],
  },
  {
    question: "What is the role of ACK in TCP communication?",
    answers: [
      { text: "To detect errors in data link layer", correct: false },
      { text: "To establish encryption keys", correct: false },
      { text: "To acknowledge receipt of data", correct: true },
      { text: "To indicate packet loss", correct: false },
    ],
  },
  {
    question: "Which technique resends only the lost packet?",
    answers: [
      { text: "Stop-and-Wait", correct: false },
      { text: "Go Back N", correct: false },
      { text: "Selective Repeat", correct: true },
      { text: "Time Division Multiplexing", correct: false },
    ],
  },
  {
    question:
      "How many frames can be outstanding in Go Back N with a 3-bit sequence number?",
    answers: [
      { text: "8", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "What does ISN stand for in TCP?",
    answers: [
      { text: "Initial Sequence Number", correct: true },
      { text: "Internet Standard Network", correct: false },
      { text: "Internal Sync Node", correct: false },
      { text: "Integrated Sequence Net", correct: false },
    ],
  },
  {
    question: "Which of the following is true about UDP?",
    answers: [
      { text: "It provides reliable data transfer", correct: false },
      { text: "It uses 3-way handshake", correct: false },
      { text: "It is a connectionless protocol", correct: true },
      { text: "It ensures sequencing of messages", correct: false },
    ],
  },
  {
    question: "In which layer is the MAC header added?",
    answers: [
      { text: "Transport Layer", correct: false },
      { text: "Network Layer", correct: false },
      { text: "Data Link Layer", correct: true },
      { text: "Application Layer", correct: false },
    ],
  },
  {
    question: "What does the 2 Army Problem illustrate?",
    answers: [
      { text: "TCP/IP layer hierarchy", correct: false },
      { text: "Importance of encryption", correct: false },
      {
        text: "Impossibility of perfect coordination on unreliable channels",
        correct: true,
      },
      { text: "Advantages of Selective Repeat over Go Back N", correct: false },
    ],
  },
  {
    question: "What does a NAK signal in data communication?",
    answers: [
      { text: "Acknowledgment received", correct: false },
      { text: "Successful data transfer", correct: false },
      { text: "Negative Acknowledgment indicating error", correct: true },
      { text: "End of message", correct: false },
    ],
  },
  {
    question: "What is a self-clocking mechanism in TCP?",
    answers: [
      {
        text: "Clock signals exchanged between sender and receiver",
        correct: false,
      },
      { text: "Synchronization using atomic clocks", correct: false },
      { text: "Adjusting send rate based on received ACKs", correct: true },
      { text: "Delaying packets for congestion control", correct: false },
    ],
  },
  {
    question:
      "Which protocol uses a fixed window size and resends all frames after a loss?",
    answers: [
      { text: "Stop-and-Wait", correct: false },
      { text: "Selective Repeat", correct: false },
      { text: "Go Back N", correct: true },
      { text: "TCP", correct: false },
    ],
  },
  {
    question:
      "What is the maximum number of outstanding frames in GBN with 4-bit sequence number?",
    answers: [
      { text: "16", correct: false },
      { text: "15", correct: true },
      { text: "14", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a responsibility of the transport layer?",
    answers: [
      { text: "Routing packets", correct: true },
      { text: "Flow control", correct: false },
      { text: "Error control", correct: false },
      { text: "Segmentation and reassembly", correct: false },
    ],
  },
  {
    question:
      "Which TCP mechanism prevents sequence number reuse from a previous connection?",
    answers: [
      { text: "ACK validation", correct: false },
      { text: "Sliding window", correct: false },
      { text: "Unique Initial Sequence Numbers (ISN)", correct: true },
      { text: "Selective Repeat", correct: false },
    ],
  },
  {
    question: "Which layer converts data to electrical or optical signals?",
    answers: [
      { text: "Data Link Layer", correct: false },
      { text: "Transport Layer", correct: false },
      { text: "Application Layer", correct: false },
      { text: "Physical Layer", correct: true },
    ],
  },
  {
    question:
      "In a TCP 3-way handshake, which message is sent by the server to acknowledge the client's SYN?",
    answers: [
      { text: "ACK", correct: false },
      { text: "SYN", correct: false },
      { text: "SYN-ACK", correct: true },
      { text: "FIN", correct: false },
    ],
  },
];

// Transport Layer - 2

export const Transport_Layer2 = [
  {
    questions:
      "Which protocol provides reliable, connection-oriented communication?",
    options: ["TCP", "UDP", "IP", "HTTP"],
    correctAnswer: "TCP",
  },
  {
    questions: "What is the main purpose of the three-way handshake in TCP?",
    options: [
      "To detect packet loss",
      "To assign IP addresses",
      "To synchronize sequence numbers between sender and receiver",
      "To establish socket connections only",
    ],
    correctAnswer:
      "To synchronize sequence numbers between sender and receiver",
  },
  {
    questions: "Which combination uniquely identifies a TCP connection?",
    options: [
      "<Src IP, Src Port, Dest IP, Dest Port>",
      "<Src IP, Src Port, Src Seq Num, Dest IP, Dest Port, Dest Seq Num>",
      "<Src MAC, Dest MAC, Port>",
      "<IP, Port, Timestamp>",
    ],
    correctAnswer:
      "<Src IP, Src Port, Src Seq Num, Dest IP, Dest Port, Dest Seq Num>",
  },
  {
    questions:
      "What is the maximum number of outstanding frames for a 3-bit Go-Back-N ARQ system?",
    options: ["8", "7", "6", "9"],
    correctAnswer: "7",
  },
  {
    questions: "Which TCP mechanism adjusts the send rate based on ACK delays?",
    options: ["AIMD", "Congestion window", "Self-clocking", "Slow start"],
    correctAnswer: "Self-clocking",
  },
  {
    questions:
      "Which problem illustrates the challenge of coordination over unreliable networks?",
    options: [
      "Tomlinson's sequence rule",
      "Sliding window",
      "Two Army Problem",
      "BDP mismatch",
    ],
    correctAnswer: "Two Army Problem",
  },
  {
    questions: "Which ARQ technique is more efficient but also more complex?",
    options: ["Go-Back-N", "Stop-and-Wait", "Selective Repeat", "Flow Control"],
    correctAnswer: "Selective Repeat",
  },
  {
    questions: "In TCP, what does the acknowledgment number represent?",
    options: [
      "The current segment number",
      "The number of bytes received",
      "The next expected byte",
      "The checksum value",
    ],
    correctAnswer: "The next expected byte",
  },
  {
    questions:
      "Which protocol layer is responsible for encapsulating TCP headers?",
    options: ["Application", "Network", "Transport", "Data Link"],
    correctAnswer: "Transport",
  },
  {
    questions: "What does AIMD stand for in congestion control?",
    options: [
      "Additive Increment, Multiplicative Division",
      "Additive Increase, Multiplicative Decrease",
      "Average Increase, Maximum Decrease",
      "Adaptive Increment, Maximum Decrease",
    ],
    correctAnswer: "Additive Increase, Multiplicative Decrease",
  },
  {
    questions: "Why are TCP sequence numbers 32 bits?",
    options: [
      "To identify different packets",
      "To represent timestamps",
      "To ensure unique byte identification",
      "To reduce bandwidth usage",
    ],
    correctAnswer: "To ensure unique byte identification",
  },
  {
    questions: "Which TCP characteristic enables bidirectional communication?",
    options: [
      "Multicast routing",
      "Full duplex",
      "Stop-and-wait protocol",
      "Byte-stream orientation",
    ],
    correctAnswer: "Full duplex",
  },
  {
    questions: "TCP is best described as a:",
    options: [
      "Message-based protocol",
      "Byte-stream protocol",
      "Packet-switched protocol",
      "Frame-based protocol",
    ],
    correctAnswer: "Byte-stream protocol",
  },
  {
    questions: "What is the formula for Bandwidth-Delay Product (BDP)?",
    options: [
      "RTT × Segment Size",
      "ACK Delay × Window Size",
      "Bandwidth × Delay",
      "Window Size ÷ Bandwidth",
    ],
    correctAnswer: "Bandwidth × Delay",
  },
  {
    questions: "What does the TCP window size field represent?",
    options: [
      "Number of packets sent",
      "Amount of time data can be sent",
      "Number of bytes the receiver is willing to accept",
      "Number of ACKs received",
    ],
    correctAnswer: "Number of bytes the receiver is willing to accept",
  },
  {
    questions: "Which protocol is used when segment size > BDP?",
    options: [
      "Go-Back-N",
      "Stop-and-Wait",
      "Selective Repeat",
      "Sliding Window",
    ],
    correctAnswer: "Stop-and-Wait",
  },
  {
    questions: "Which RFC addresses TCP's sequence number wraparound issue?",
    options: ["RFC 793", "RFC 1122", "RFC 1323", "RFC 1035"],
    correctAnswer: "RFC 1323",
  },
  {
    questions: "In TCP, what can cause out-of-order delivery of segments?",
    options: [
      "Congestion control",
      "Path MTU changes",
      "Packet reshaping during retransmission",
      "Buffer overflow",
    ],
    correctAnswer: "Packet reshaping during retransmission",
  },
  {
    questions: "What is used to discover the Path MTU in TCP?",
    options: ["ACK probing", "ICMP messages", "TCP handshake", "SYN packets"],
    correctAnswer: "ICMP messages",
  },
  {
    questions:
      "Which mechanism allows variable-sized data to be managed in buffers?",
    options: [
      "Fixed-size buffer pool",
      "Chained fixed buffers",
      "Circular buffer",
      "Sliding window buffers",
    ],
    correctAnswer: "Chained fixed buffers",
  },
];

// Transport Layer - 3

export const Transport_Layer3 = [
  {
    questions: "What does AIMD stand for in TCP congestion control?",
    options: [
      "Additive Increase Multiplicative Decrease",
      "Advanced Internet Multiplexing Device",
      "Automatic Increment Message Delivery",
      "Additive Internet Mode Detection",
    ],
    correctAnswer: "Additive Increase Multiplicative Decrease",
  },
  {
    questions: "In TCP, what is the Congestion Window (CWnd)?",
    options: [
      "Maximum size of receiver buffer",
      "Maximum number of retransmissions allowed",
      "Maximum number of segments in-flight",
      "Minimum size of ACK window",
    ],
    correctAnswer: "Maximum number of segments in-flight",
  },
  {
    questions: "What is the sending rate of TCP in terms of CWnd and RTT?",
    options: ["RTT / CWnd", "CWnd × RTT", "CWnd / RTT", "CWnd – RTT"],
    correctAnswer: "CWnd / RTT",
  },
  {
    questions: "Which condition led to TCP congestion collapse in 1986?",
    options: [
      "Unreliable routing tables",
      "Uncontrolled retransmissions",
      "DNS failures",
      "Lack of flow control",
    ],
    correctAnswer: "Uncontrolled retransmissions",
  },
  {
    questions:
      "Who introduced congestion control in TCP using packet loss as a signal?",
    options: ["Vint Cerf", "Van Jacobson", "Tim Berners-Lee", "Jon Postel"],
    correctAnswer: "Van Jacobson",
  },
  {
    questions: "How is packet loss detected in TCP?",
    options: [
      "Through ECN flags only",
      "Through checksum errors",
      "Via timeout or 3 duplicate ACKs",
      "By SYN flood detection",
    ],
    correctAnswer: "Via timeout or 3 duplicate ACKs",
  },
  {
    questions: "During TCP slow start, how does the congestion window grow?",
    options: [
      "Linearly with each RTT",
      "Doubles every RTT",
      "Decreases exponentially",
      "Remains constant",
    ],
    correctAnswer: "Doubles every RTT",
  },
  {
    questions: "What happens when TCP receives 3 duplicate ACKs?",
    options: [
      "Nothing; it waits for timeout",
      "Starts fast retransmission and recovery",
      "Terminates the connection",
      "Performs exponential backoff",
    ],
    correctAnswer: "Starts fast retransmission and recovery",
  },
  {
    questions: "What is the initial congestion window size in TCP?",
    options: [
      "0 bytes",
      "1 MSS",
      "ssthresh value",
      "Half of the receiver window",
    ],
    correctAnswer: "1 MSS",
  },
  {
    questions:
      "In TCP Reno, what is CWnd set to after a fast recovery completes?",
    options: ["ssthresh – 1", "ssthresh + 3", "ssthresh", "1 MSS"],
    correctAnswer: "ssthresh",
  },
  {
    questions: "Which application is most likely to use UDP?",
    options: [
      "Email transfer (SMTP)",
      "VoIP call",
      "Web browsing (HTTP)",
      "FTP file transfer",
    ],
    correctAnswer: "VoIP call",
  },
  {
    questions: "Which protocol is used for dynamic IP assignment in a network?",
    options: ["DNS", "BOOTP/DHCP", "TFTP", "SNMP"],
    correctAnswer: "BOOTP/DHCP",
  },
  {
    questions: "What is the purpose of port numbers in TCP/IP?",
    options: [
      "To identify network interfaces",
      "To uniquely identify application processes",
      "To define protocol versions",
      "To route packets",
    ],
    correctAnswer: "To uniquely identify application processes",
  },
  {
    questions:
      "What kind of socket is used for reliable byte stream communication?",
    options: [
      "Datagram socket",
      "Stream socket",
      "Multicast socket",
      "Raw socket",
    ],
    correctAnswer: "Stream socket",
  },
  {
    questions:
      "Which function is used in a concurrent server to monitor multiple file descriptors?",
    options: ["fork()", "bind()", "select()", "accept()"],
    correctAnswer: "select()",
  },
  {
    questions: "In TCP, how is congestion avoidance growth of CWnd calculated?",
    options: [
      "CWnd += MSS",
      "CWnd += (MSS × MSS)/CWnd",
      "CWnd × 2",
      "CWnd – MSS",
    ],
    correctAnswer: "CWnd += (MSS × MSS)/CWnd",
  },
  {
    questions:
      "Which socket API function is used to establish a connection with a client?",
    options: ["listen()", "accept()", "connect()", "bind()"],
    correctAnswer: "accept()",
  },
  {
    questions: "In TCP, what does SWnd (Sender Window) equal to?",
    options: [
      "Max(CWnd, RWnd)",
      "CWnd × RWnd",
      "Min(CWnd, RWnd)",
      "CWnd + RWnd",
    ],
    correctAnswer: "Min(CWnd, RWnd)",
  },
  {
    questions: "What is the formula for Bandwidth Delay Product (BDP)?",
    options: [
      "RTT / Bandwidth",
      "CWnd × RTT",
      "Bandwidth × RTT",
      "Bandwidth / RTT",
    ],
    correctAnswer: "Bandwidth × RTT",
  },
  {
    questions:
      "Which protocol supports fast, multiplexed connections over UDP and was developed by Google?",
    options: ["SNMP", "QUIC", "TFTP", "BOOTP"],
    correctAnswer: "QUIC",
  },
];

export const Network_Layer = [
  {
    questions:
      "What is the primary function of the Network Layer in the OSI model?",
    options: [
      "Logical addressing and routing",
      "Data encryption and decryption",
      "Establishing end-to-end connections",
      "Flow control and congestion control",
    ],
    correctAnswer: "Logical addressing and routing",
  },
  {
    questions: "How many bits are used in an IPv4 address?",
    options: ["64", "128", "32", "48"],
    correctAnswer: "32",
  },
  {
    questions: "Which class of IP address is used for small networks?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: "Class C",
  },
  {
    questions: "What is the default subnet mask for a Class A IP address?",
    options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"],
    correctAnswer: "255.0.0.0",
  },
  {
    questions: "Which IP address class is reserved for multicasting?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: "Class D",
  },
  {
    questions: "What does CIDR stand for?",
    options: [
      "Classful Inter-Domain Routing",
      "Classless Inter-Domain Routing",
      "Common Internet Domain Routing",
      "Centralized IP Domain Routing",
    ],
    correctAnswer: "Classless Inter-Domain Routing",
  },
  {
    questions: "Which of the following is a private IP address range?",
    options: ["203.110.0.0/16", "172.32.0.0/12", "192.168.0.0/16", "8.8.8.8"],
    correctAnswer: "192.168.0.0/16",
  },
  {
    questions: "What is the purpose of Network Address Translation (NAT)?",
    options: [
      "To encrypt data for security",
      "To assign MAC addresses",
      "To share one public IP among multiple private IPs",
      "To split a network into subnets",
    ],
    correctAnswer: "To share one public IP among multiple private IPs",
  },
  {
    questions: "Which format is correct for an IPv6 address?",
    options: [
      "192.168.0.1",
      "FE80:0:0:0:1:800:23E7:F5DB",
      "10.0.0.1/24",
      "CA8D:5014:202",
    ],
    correctAnswer: "FE80:0:0:0:1:800:23E7:F5DB",
  },
  {
    questions: "What does the double colon (::) in an IPv6 address represent?",
    options: [
      "Two segments with all 1s",
      "A port number",
      "A group of consecutive zeroes",
      "The subnet mask",
    ],
    correctAnswer: "A group of consecutive zeroes",
  },
  {
    questions: "Which IP address is the broadcast address for 192.168.1.0/24?",
    options: ["192.168.1.0", "192.168.1.1", "192.168.1.255", "192.168.0.255"],
    correctAnswer: "192.168.1.255",
  },
  {
    questions: "What is Supernetting used for?",
    options: [
      "Creating smaller subnets from a large network",
      "Assigning MAC addresses",
      "Combining smaller networks into a larger one",
      "Dividing a single IP into multiple virtual IPs",
    ],
    correctAnswer: "Combining smaller networks into a larger one",
  },
  {
    questions: "How many bits are used in an IPv6 address?",
    options: ["32", "64", "128", "256"],
    correctAnswer: "128",
  },
  {
    questions: "Which technique helps reduce routing table size?",
    options: ["Tunneling", "Header Translation", "CIDR", "Fragmentation"],
    correctAnswer: "CIDR",
  },
  {
    questions: "What is the IPv4-mapped IPv6 representation of 202.141.80.20?",
    options: [
      "::FFFF:202.141.80.20",
      "::202:141:80:20",
      "::FFFF:CA8D:5014",
      "::141:202:80:20",
    ],
    correctAnswer: "::FFFF:CA8D:5014",
  },
  {
    questions: "What is the use of extension headers in IPv6?",
    options: [
      "To allow backward compatibility with IPv4",
      "To support optional features like mobility and routing",
      "To reduce packet size",
      "To identify classes of addresses",
    ],
    correctAnswer: "To support optional features like mobility and routing",
  },
  {
    questions: "Which of the following is NOT a feature of IPv6?",
    options: [
      "Built-in security",
      "Auto-configuration",
      "Fixed class sizes",
      "Hierarchical addressing",
    ],
    correctAnswer: "Fixed class sizes",
  },
  {
    questions:
      "Which NAT use case involves splitting incoming traffic among servers?",
    options: [
      "Migration between ISPs",
      "IP masquerading",
      "Load balancing",
      "IPv6 header translation",
    ],
    correctAnswer: "Load balancing",
  },
  {
    questions: "Which technique allows IPv4 and IPv6 to coexist?",
    options: ["Supernetting", "CIDR", "Tunneling", "Fragmentation"],
    correctAnswer: "Tunneling",
  },
  {
    questions:
      "Which of the following helps maintain a consistent address during movement in IPv6?",
    options: [
      "Tunneling",
      "Header compression",
      "Destination optional headers",
      "Supernetting",
    ],
    correctAnswer: "Destination optional headers",
  },
];

// INternet QOS

export const QoS = [
  {
    questions:
      "What is the main goal of Quality of Service (QoS) in a network?",
    options: [
      "To reduce the overall cost of networking hardware",
      "To increase the number of users",
      "To provide priority to selected traffic",
      "To decrease power consumption",
    ],
    correctAnswer: "To provide priority to selected traffic",
  },
  {
    questions: "Which of the following is NOT a primary QoS parameter?",
    options: ["Bandwidth", "Delay", "Packet Switching", "Jitter"],
    correctAnswer: "Packet Switching",
  },
  {
    questions: "What does jitter refer to in QoS terminology?",
    options: [
      "Total data loss",
      "Variation in delay",
      "Increased bandwidth",
      "High propagation time",
    ],
    correctAnswer: "Variation in delay",
  },
  {
    questions:
      "Which delay component is typically the largest contributor to total delay?",
    options: [
      "Transmission delay",
      "Propagation delay",
      "Queuing delay",
      "Forwarding delay",
    ],
    correctAnswer: "Queuing delay",
  },
  {
    questions: "What is a 'flow' in QoS?",
    options: [
      "A type of network protocol",
      "A path of router connections",
      "A stream of packets between entities like applications or sockets",
      "The process of bandwidth reservation",
    ],
    correctAnswer:
      "A stream of packets between entities like applications or sockets",
  },
  {
    questions: "Why is QoS implemented at the network layer?",
    options: [
      "To monitor hardware performance",
      "To manage IP addressing",
      "To ensure end-to-end service guarantees like delay and loss",
      "To encrypt all packets",
    ],
    correctAnswer:
      "To ensure end-to-end service guarantees like delay and loss",
  },
  {
    questions: "Which application class requires low jitter and delay?",
    options: ["File Transfer", "IPTV", "VoIP", "Email"],
    correctAnswer: "VoIP",
  },
  {
    questions: "What does Admission Control do in QoS architecture?",
    options: [
      "Monitors packet errors",
      "Assigns IP addresses",
      "Decides whether to allow a flow based on resources",
      "Encrypts traffic",
    ],
    correctAnswer: "Decides whether to allow a flow based on resources",
  },
  {
    questions: "In QoS, what is the role of classification and marking?",
    options: [
      "It drops unwanted packets",
      "It measures network performance",
      "It identifies traffic and marks it for QoS handling",
      "It encrypts high-priority packets",
    ],
    correctAnswer: "It identifies traffic and marks it for QoS handling",
  },
  {
    questions: "Which mechanism smooths traffic bursts?",
    options: ["Policing", "Shaping", "Admission control", "Scheduling"],
    correctAnswer: "Shaping",
  },
  {
    questions: "Which queuing technique gives equal turn per flow?",
    options: [
      "FIFO",
      "Round Robin (RR)",
      "Priority Queuing",
      "Weighted Fair Queuing",
    ],
    correctAnswer: "Round Robin (RR)",
  },
  {
    questions: "What does RED (Random Early Detection) help prevent?",
    options: [
      "Firewall attacks",
      "Congestion by early packet dropping",
      "Bandwidth shortage",
      "Token overflow",
    ],
    correctAnswer: "Congestion by early packet dropping",
  },
  {
    questions:
      "Which of the following uses RSVP for per-flow resource reservation?",
    options: [
      "DiffServ",
      "Best-effort delivery",
      "Integrated Services (IntServ)",
      "TCP/IP",
    ],
    correctAnswer: "Integrated Services (IntServ)",
  },
  {
    questions: "What does RSVP stand for?",
    options: [
      "Reliable Stream Verification Protocol",
      "Resource Status Validation Protocol",
      "Resource Reservation Protocol",
      "Rapid Streaming Virtual Protocol",
    ],
    correctAnswer: "Resource Reservation Protocol",
  },
  {
    questions: "What does DSCP stand for in DiffServ?",
    options: [
      "Differentiated Services Class Protocol",
      "Differentiated Services Code Point",
      "Data Stream Control Packet",
      "Distributed Service Control Point",
    ],
    correctAnswer: "Differentiated Services Code Point",
  },
  {
    questions: "Which PHB in DiffServ is suitable for VoIP?",
    options: [
      "Default PHB",
      "EF (Expedited Forwarding)",
      "AF (Assured Forwarding)",
      "Class Selector PHB",
    ],
    correctAnswer: "EF (Expedited Forwarding)",
  },
  {
    questions: "Which PHB provides better than best-effort service?",
    options: ["EF", "Default PHB", "AF", "Selector PHB"],
    correctAnswer: "AF",
  },
  {
    questions: "Which of the following uses tokens to allow bursts?",
    options: ["Leaky Bucket", "Token Bucket", "RED", "FIFO"],
    correctAnswer: "Token Bucket",
  },
  {
    questions: "What is the output nature of Leaky Bucket?",
    options: ["Bursty", "Variable", "Smooth", "Unpredictable"],
    correctAnswer: "Smooth",
  },
  {
    questions: "Which is a feature of Policing in QoS?",
    options: [
      "Smooths traffic using buffers",
      "Drops packets that exceed limits",
      "Always delays packets",
      "Increases packet size",
    ],
    correctAnswer: "Drops packets that exceed limits",
  },
  {
    questions: "Which queuing method offers a fair share to each flow?",
    options: ["FIFO", "Priority Queuing", "Weighted Fair Queuing (WFQ)", "RED"],
    correctAnswer: "Weighted Fair Queuing (WFQ)",
  },
  {
    questions: "Which component enforces SLA by monitoring rate in DiffServ?",
    options: ["Meter", "Dropper", "Marker", "Shaper"],
    correctAnswer: "Meter",
  },
  {
    questions: "Which DiffServ component marks packets with DSCP?",
    options: ["Shaper", "Dropper", "Marker", "Meter"],
    correctAnswer: "Marker",
  },
  {
    questions: "Who initiates resource reservation in RSVP?",
    options: ["Sender", "Router", "Receiver", "Firewall"],
    correctAnswer: "Receiver",
  },
  {
    questions: "Which QoS architecture is more coarse-grained?",
    options: ["IntServ", "DiffServ", "RSVP", "CBQ"],
    correctAnswer: "DiffServ",
  },
  {
    questions: "Which traffic scheduling method handles classes of traffic?",
    options: ["CBQ (Class-Based Queuing)", "FIFO", "RR", "RED"],
    correctAnswer: "CBQ (Class-Based Queuing)",
  },
  {
    questions: "What does a Bandwidth Broker do?",
    options: [
      "Controls IP address allocation",
      "Allocates bandwidth based on SLA",
      "Encrypts sensitive packets",
      "Drops excess packets",
    ],
    correctAnswer: "Allocates bandwidth based on SLA",
  },
  {
    questions: "Which of the following is TRUE about token bucket?",
    options: [
      "It provides fixed output rate",
      "It cannot handle traffic bursts",
      "It uses tokens to allow variable rate",
      "It has no burst handling mechanism",
    ],
    correctAnswer: "It uses tokens to allow variable rate",
  },
  {
    questions: "Which factor impacts video streaming the most?",
    options: ["Encryption", "Authentication", "Jitter", "TTL value"],
    correctAnswer: "Jitter",
  },
];

export const IP_Routing = [
  {
    questions: "What is the size of an IPv4 address?",
    options: ["32 bits", "64 bits", "128 bits", "16 bits"],
    correctAnswer: "32 bits",
  },
  {
    questions: "Which class of IP addresses is used for large networks?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: "Class A",
  },
  {
    questions: "CIDR stands for:",
    options: [
      "Classful Inter-Domain Routing",
      "Classless Inter-Domain Routing",
      "Classless Intra-Domain Routing",
      "Connected Inter-Domain Routing",
    ],
    correctAnswer: "Classless Inter-Domain Routing",
  },
  {
    questions: "What does the '/24' in 192.168.1.0/24 represent?",
    options: [
      "Subnet mask of 255.255.255.0",
      "Number of usable hosts",
      "Host ID bits",
      "Class C address",
    ],
    correctAnswer: "Subnet mask of 255.255.255.0",
  },
  {
    questions:
      "What technique is used to match the most specific entry in a routing table?",
    options: [
      "CIDR Matching",
      "Prefix Sorting",
      "Longest Prefix Match",
      "Route Summarization",
    ],
    correctAnswer: "Longest Prefix Match",
  },
  {
    questions: "Which data structure is commonly used to implement LPM?",
    options: ["Array", "Patricia Trie", "Stack", "Hash Map"],
    correctAnswer: "Patricia Trie",
  },
  {
    questions: "Which class is reserved for multicast?",
    options: ["Class D", "Class E", "Class B", "Class A"],
    correctAnswer: "Class D",
  },
  {
    questions: "What is the purpose of hierarchical addressing?",
    options: [
      "To avoid subnetting",
      "To increase IP allocation",
      "To reduce routing table size",
      "To replace CIDR",
    ],
    correctAnswer: "To reduce routing table size",
  },
  {
    questions: "Which command can be used to query IP address ownership?",
    options: ["whois", "traceroute", "ping", "netstat"],
    correctAnswer: "whois",
  },
  {
    questions: "Which of the following defines routing?",
    options: [
      "Forwarding packets to output ports",
      "Moving data to next-hop router",
      "Populating forwarding tables",
      "Handling TCP connections",
    ],
    correctAnswer: "Populating forwarding tables",
  },
  {
    questions: "What is the primary focus of inter-domain routing?",
    options: ["Optimality", "Security", "Policies and scalability", "Speed"],
    correctAnswer: "Policies and scalability",
  },
  {
    questions: "Which protocol is an example of inter-domain routing?",
    options: ["OSPF", "RIP", "BGP", "EIGRP"],
    correctAnswer: "BGP",
  },
  {
    questions: "Which protocol category uses Dijkstra’s algorithm?",
    options: ["Distance Vector", "Path Vector", "Link State", "Hybrid"],
    correctAnswer: "Link State",
  },
  {
    questions: "Which protocol uses Bellman-Ford algorithm?",
    options: ["RIP", "OSPF", "BGP", "EIGRP"],
    correctAnswer: "RIP",
  },
  {
    questions: "What is the main role of BGP?",
    options: [
      "Routing within an AS",
      "Subnet allocation",
      "Inter-AS routing",
      "Distance calculation",
    ],
    correctAnswer: "Inter-AS routing",
  },
  {
    questions: "Which port number is used by BGP?",
    options: ["110", "179", "443", "80"],
    correctAnswer: "179",
  },
  {
    questions: "Which BGP message type maintains session liveliness?",
    options: ["OPEN", "UPDATE", "KEEPALIVE", "NOTIFICATION"],
    correctAnswer: "KEEPALIVE",
  },
  {
    questions: "Which protocol type shares full topology with routers?",
    options: ["Distance Vector", "Link State", "Path Vector", "Hybrid"],
    correctAnswer: "Link State",
  },
  {
    questions: "What is a stub AS?",
    options: [
      "Connects to only one other AS",
      "Handles multiple transit connections",
      "Main routing backbone",
      "Provides DNS services",
    ],
    correctAnswer: "Connects to only one other AS",
  },
  {
    questions: "Which BGP variant operates between ASes?",
    options: ["IBGP", "EBGP", "OSPF", "RIP"],
    correctAnswer: "EBGP",
  },
  {
    questions: "Which protocol is an example of a Hybrid Routing Protocol?",
    options: ["BGP", "OSPF", "EIGRP", "RIP"],
    correctAnswer: "EIGRP",
  },
  {
    questions: "Which protocol sends distance vectors to neighbors?",
    options: ["RIP", "OSPF", "BGP", "EIGRP"],
    correctAnswer: "RIP",
  },
  {
    questions:
      "Which routing algorithm helps avoid loops using AS path information?",
    options: ["Dijkstra", "Bellman-Ford", "Path Vector", "Shortest Path First"],
    correctAnswer: "Path Vector",
  },
  {
    questions: "What type of BGP message is used to advertise routes?",
    options: ["OPEN", "UPDATE", "NOTIFICATION", "KEEPALIVE"],
    correctAnswer: "UPDATE",
  },
  {
    questions: "What is the purpose of a forwarding table?",
    options: [
      "Store MAC addresses",
      "Map destinations to outgoing interfaces",
      "Filter IP packets",
      "Encrypt data packets",
    ],
    correctAnswer: "Map destinations to outgoing interfaces",
  },
  {
    questions: "What does LPM stand for in networking?",
    options: [
      "Least Path Method",
      "Longest Path Match",
      "Longest Prefix Match",
      "Local Prefix Matching",
    ],
    correctAnswer: "Longest Prefix Match",
  },
  {
    questions: "Which protocol builds a link-state database?",
    options: ["RIP", "BGP", "OSPF", "EIGRP"],
    correctAnswer: "OSPF",
  },
  {
    questions: "Which area is the backbone area in OSPF?",
    options: ["Area 0", "Area 1", "Area 10", "Area A"],
    correctAnswer: "Area 0",
  },
  {
    questions: "What are ABRs in OSPF?",
    options: [
      "Routers that block updates",
      "Routers that act as DNS",
      "Routers connecting backbone and other areas",
      "Routers used for multicast",
    ],
    correctAnswer: "Routers connecting backbone and other areas",
  },
  {
    questions: "Which type of link is abstracted over physical media?",
    options: ["Point-to-point", "Stub", "Virtual", "Transient"],
    correctAnswer: "Virtual",
  },
];

// formatter router

export const Router = [
  {
    questions:
      "Which generation of router introduced software-defined routing?",
    options: ["1st Gen", "3rd Gen", "4th Gen", "5th Gen"],
    correctAnswer: "5th Gen",
  },
  {
    questions:
      "What component is responsible for constructing the routing table?",
    options: [
      "Switch Fabric",
      "Interface Card",
      "Route Processor",
      "SDN Controller",
    ],
    correctAnswer: "Route Processor",
  },
  {
    questions:
      "Which type of memory is used for fast packet forwarding in routers?",
    options: ["RAM", "ROM", "CAM", "TCAM"],
    correctAnswer: "TCAM",
  },
  {
    questions: "What is the main purpose of the Data Plane?",
    options: [
      "Running routing protocols",
      "Maintaining routing tables",
      "Packet forwarding",
      "Control messaging",
    ],
    correctAnswer: "Packet forwarding",
  },
  {
    questions: "Which plane is responsible for route calculation?",
    options: [
      "Data Plane",
      "Control Plane",
      "Management Plane",
      "Transport Plane",
    ],
    correctAnswer: "Control Plane",
  },
  {
    questions: "What is a key feature of the Slotted Chassis architecture?",
    options: [
      "Single fixed board",
      "Slots for adding modules",
      "Increased vendor lock-in",
      "Non-upgradable design",
    ],
    correctAnswer: "Slots for adding modules",
  },
  {
    questions: "Which plane executes the routing protocols?",
    options: [
      "Data Plane",
      "Control Plane",
      "Fabric Plane",
      "Application Plane",
    ],
    correctAnswer: "Control Plane",
  },
  {
    questions: "What does FIB stand for?",
    options: [
      "Fast Interface Buffer",
      "Forwarding Interface Base",
      "Forwarding Information Base",
      "Functional Integrated Buffer",
    ],
    correctAnswer: "Forwarding Information Base",
  },
  {
    questions: "Where is the FIB located?",
    options: [
      "Route Processor",
      "Control Plane",
      "Interface Hardware",
      "Router OS",
    ],
    correctAnswer: "Interface Hardware",
  },
  {
    questions: "Which component uses pattern matching for fast lookup?",
    options: ["RIB", "RAM", "TCAM", "CPU Cache"],
    correctAnswer: "TCAM",
  },
  {
    questions: "What values can TCAM store?",
    options: ["0 and 1", "0, 1, and 2", "0, 1, and X", "X and Y only"],
    correctAnswer: "0, 1, and X",
  },
  {
    questions: "What differentiates CAM from RAM?",
    options: [
      "CAM is slower",
      "CAM is used for arithmetic",
      "CAM uses content-based lookup",
      "RAM is used in FIB",
    ],
    correctAnswer: "CAM uses content-based lookup",
  },
  {
    questions: "Which memory is ideal for per-packet fast forwarding?",
    options: ["ROM", "SRAM", "TCAM", "DRAM"],
    correctAnswer: "TCAM",
  },
  {
    questions: "What is the role of the Switch Fabric?",
    options: [
      "Execute routing protocols",
      "Forward packets internally",
      "Handle user authentication",
      "Manage logs and errors",
    ],
    correctAnswer: "Forward packets internally",
  },
  {
    questions: "What is the relationship between RIB and FIB?",
    options: [
      "FIB is derived from RIB",
      "RIB is a hardware replica of FIB",
      "FIB is located in control plane",
      "RIB is used for packet forwarding",
    ],
    correctAnswer: "FIB is derived from RIB",
  },
  {
    questions:
      "Which protocol enables SDN controllers to communicate with switches?",
    options: ["SNMP", "OpenFlow", "BGP", "TCP/IP"],
    correctAnswer: "OpenFlow",
  },
  {
    questions: "What is a key benefit of SDN over traditional networking?",
    options: [
      "Lower bandwidth",
      "Centralized control",
      "Vendor lock-in",
      "Fixed configuration",
    ],
    correctAnswer: "Centralized control",
  },
  {
    questions: "In SDN, where is routing logic typically located?",
    options: [
      "In each switch",
      "In the OpenFlow protocol",
      "In the SDN Controller",
      "In the routing table",
    ],
    correctAnswer: "In the SDN Controller",
  },
  {
    questions: "Which type of OpenFlow message checks if a switch is alive?",
    options: [
      "Group message",
      "Echo request/reply",
      "Stats message",
      "Async message",
    ],
    correctAnswer: "Echo request/reply",
  },
  {
    questions: "Which OpenFlow message informs about rule removal or errors?",
    options: [
      "Stats message",
      "Group message",
      "Async message",
      "Echo message",
    ],
    correctAnswer: "Async message",
  },
  {
    questions: "Which term best describes the FIB?",
    options: [
      "Dynamic software table",
      "Control plane table",
      "Hardware-accelerated forwarding table",
      "Temporary cache",
    ],
    correctAnswer: "Hardware-accelerated forwarding table",
  },
  {
    questions: "Which of the following uses fork to handle clients?",
    options: [
      "TCP Server with select",
      "UDP Server",
      "TCP Server with fork",
      "TCP Client",
    ],
    correctAnswer: "TCP Server with fork",
  },
  {
    questions: "Which socket server handles multiple clients in one process?",
    options: [
      "TCP Server with fork",
      "UDP Client",
      "TCP Server with select",
      "TCP Server (single-threaded)",
    ],
    correctAnswer: "TCP Server with select",
  },
  {
    questions: "What kind of hardware is promoted in SDN?",
    options: ["Proprietary", "Custom-made", "Commodity", "Read-only"],
    correctAnswer: "Commodity",
  },
  {
    questions: "Which feature is found in traditional networks but not in SDN?",
    options: [
      "Central controller",
      "Hardware abstraction",
      "Tightly coupled planes",
      "OpenFlow protocol",
    ],
    correctAnswer: "Tightly coupled planes",
  },
  {
    questions: "Which memory performs searches in one clock cycle?",
    options: ["ROM", "SRAM", "TCAM", "Flash"],
    correctAnswer: "TCAM",
  },
  {
    questions: "Where is RIB primarily located?",
    options: [
      "In Interface Card",
      "In Control Plane",
      "In Data Plane",
      "In TCAM",
    ],
    correctAnswer: "In Control Plane",
  },
  {
    questions: "What is the main function of the SDN controller?",
    options: [
      "Store data packets",
      "Forward packets",
      "Enforce and manage routing logic",
      "Replace all routers",
    ],
    correctAnswer: "Enforce and manage routing logic",
  },
  {
    questions: "Which OpenFlow message type gathers network statistics?",
    options: [
      "Stats message",
      "Echo message",
      "Async message",
      "Request message",
    ],
    correctAnswer: "Stats message",
  },
];

export const Data_Link_Layer = [
  {
    questions:
      "What is the primary responsibility of the Data Link Layer in the OSI model?",
    options: [
      "Routing and forwarding",
      "Framing, Error Detection, Flow Control",
      "Encryption and decryption",
      "Port addressing",
    ],
    correctAnswer: "Framing, Error Detection, Flow Control",
  },
  {
    questions:
      "Which sublayer of the Data Link Layer is responsible for medium access control?",
    options: ["Transport Layer", "LLC", "MAC", "Physical Layer"],
    correctAnswer: "MAC",
  },
  {
    questions: "What IEEE standard defines Ethernet (CSMA/CD)?",
    options: ["802.2", "802.3", "802.5", "802.11"],
    correctAnswer: "802.3",
  },
  {
    questions: "Which IEEE standard is used for Wireless LANs?",
    options: ["802.2", "802.3", "802.5", "802.11"],
    correctAnswer: "802.11",
  },
  {
    questions:
      "Which layer provides an interface to the network layer in LAN protocols?",
    options: ["MAC", "Physical", "LLC", "Transport"],
    correctAnswer: "LLC",
  },
  {
    questions:
      "Which MAC service type provides acknowledgments but no logical connection?",
    options: [
      "Connection Mode",
      "Unacknowledged Connectionless",
      "Acknowledged Connectionless",
      "Synchronous Connection",
    ],
    correctAnswer: "Acknowledged Connectionless",
  },
  {
    questions: "Which component of a MAC frame is used for error detection?",
    options: ["MAC Control", "LLC Data", "CRC", "Source MAC"],
    correctAnswer: "CRC",
  },
  {
    questions:
      "Which MAC method allows all stations to transmit whenever the channel is free?",
    options: ["Token Passing", "Reservation", "Contention", "TDM"],
    correctAnswer: "Contention",
  },
  {
    questions: "Which protocol is used in Ethernet for access control?",
    options: ["Token Passing", "ALOHA", "CSMA/CD", "Slotted ALOHA"],
    correctAnswer: "CSMA/CD",
  },
  {
    questions: "What is the maximum channel utilization in Pure ALOHA?",
    options: ["36%", "50%", "18%", "75%"],
    correctAnswer: "18%",
  },
  {
    questions: "What is the collision detection time in CSMA/CD?",
    options: [
      "1 × Propagation delay",
      "2 × Propagation delay",
      "Packet transmission time",
      "Slot time",
    ],
    correctAnswer: "2 × Propagation delay",
  },
  {
    questions:
      "Which of the following is a characteristic of Token Ring networks?",
    options: [
      "Collision detection",
      "Contention-based access",
      "Token-based access",
      "Asynchronous access",
    ],
    correctAnswer: "Token-based access",
  },
  {
    questions: "Which Ethernet variant uses twisted pair cables at 10 Mbps?",
    options: ["100BaseT", "10BaseT", "10Base5", "1000BaseF"],
    correctAnswer: "10BaseT",
  },
  {
    questions: "What does the term 'Baseband' refer to in Ethernet standards?",
    options: [
      "Analog transmission",
      "Digital signaling",
      "Wireless transmission",
      "Multi-channel support",
    ],
    correctAnswer: "Digital signaling",
  },
  {
    questions:
      "Which of the following offers higher efficiency for bursty LAN traffic?",
    options: ["Synchronous MAC", "Asynchronous MAC", "Token Ring", "TDM"],
    correctAnswer: "Asynchronous MAC",
  },
  {
    questions: "What does a MAC address identify?",
    options: ["A port", "A process", "A physical device", "A user"],
    correctAnswer: "A physical device",
  },
  {
    questions: "Which backoff mechanism is used after collision in CSMA/CD?",
    options: [
      "Token Waiting",
      "Fixed delay",
      "Random backoff",
      "Priority queueing",
    ],
    correctAnswer: "Random backoff",
  },
  {
    questions: "Which access technique is used in Token Ring?",
    options: ["CSMA/CD", "Contention", "Token Passing", "ALOHA"],
    correctAnswer: "Token Passing",
  },
  {
    questions: "Which of the following uses slot synchronization?",
    options: ["Pure ALOHA", "CSMA/CD", "Slotted ALOHA", "Token Ring"],
    correctAnswer: "Slotted ALOHA",
  },
  {
    questions: "In LAN addressing, SAP refers to:",
    options: [
      "Service Access Point",
      "Service Allocation Protocol",
      "Shared Access Point",
      "Single Access Protocol",
    ],
    correctAnswer: "Service Access Point",
  },
  {
    questions:
      "Which protocol provides connection mode and unacknowledged connectionless services?",
    options: ["LLC", "MAC", "IP", "TCP"],
    correctAnswer: "LLC",
  },
  {
    questions: "What is a key function of the MAC sublayer?",
    options: [
      "Routing decisions",
      "Encryption and decryption",
      "Medium access control",
      "End-to-end delivery",
    ],
    correctAnswer: "Medium access control",
  },
  {
    questions: "Who developed Ethernet?",
    options: ["Norm Abramson", "Bob Metcalfe", "Vint Cerf", "Tim Berners-Lee"],
    correctAnswer: "Bob Metcalfe",
  },
  {
    questions: "Token Ring uses which topology?",
    options: ["Mesh", "Star", "Ring", "Bus"],
    correctAnswer: "Ring",
  },
  {
    questions: "Which type of MAC technique uses TDM and FDM?",
    options: [
      "Contention-based",
      "Reservation-based",
      "Synchronous MAC",
      "Asynchronous MAC",
    ],
    correctAnswer: "Synchronous MAC",
  },
  {
    questions:
      "Which access method allows collisions and uses retry mechanisms?",
    options: [
      "Channel Partitioning",
      "Random Access",
      "Shared Access",
      "Central Scheduling",
    ],
    correctAnswer: "Random Access",
  },
  {
    questions: "Which physical layer signaling is used by Ethernet standards?",
    options: [
      "Broadband and Baseband",
      "Only Broadband",
      "Only Baseband",
      "Frequency Division Multiplexing",
    ],
    correctAnswer: "Broadband and Baseband",
  },
  {
    questions: "Which cabling type is used for 100BaseT Ethernet?",
    options: ["Thick Coaxial", "Twisted Pair", "Optical Fiber", "Thin Coaxial"],
    correctAnswer: "Twisted Pair",
  },
  {
    questions: "Which of the following is NOT part of the MAC frame?",
    options: ["Destination MAC", "LLC Data", "MAC Control", "IP Header"],
    correctAnswer: "IP Header",
  },
  {
    questions: "Shared access networks require MAC protocols to:",
    options: [
      "Provide encryption",
      "Control access to medium",
      "Assign static IPs",
      "Support TCP only",
    ],
    correctAnswer: "Control access to medium",
  },
];

// ARP

export const ARP = [
  {
    questions: "What is the main function of ARP?",
    options: [
      "To resolve MAC address to IP address",
      "To assign IP addresses dynamically",
      "To resolve IP address to MAC address",
      "To route data between networks",
    ],
    correctAnswer: "To resolve IP address to MAC address",
  },
  {
    questions:
      "What does a host do if a MAC address is not found in ARP cache?",
    options: [
      "It waits for timeout",
      "It sends a broadcast ARP request",
      "It drops the packet",
      "It sends a unicast to the router",
    ],
    correctAnswer: "It sends a broadcast ARP request",
  },
  {
    questions:
      "Which protocol is used by routers to answer ARP queries on behalf of another host?",
    options: ["BOOTP", "Proxy ARP", "DHCP", "RARP"],
    correctAnswer: "Proxy ARP",
  },
  {
    questions: "RARP is primarily used for:",
    options: [
      "Resolving IP to MAC",
      "Assigning dynamic IP addresses",
      "Diskless workstations to get their IP",
      "Secure routing",
    ],
    correctAnswer: "Diskless workstations to get their IP",
  },
  {
    questions: "Which protocol has largely replaced RARP?",
    options: ["DNS", "BOOTP", "SMTP", "FTP"],
    correctAnswer: "BOOTP",
  },
  {
    questions: "Which ports does BOOTP use for client-server communication?",
    options: [
      "UDP 69 and 70",
      "TCP 21 and 22",
      "UDP 67 and 68",
      "TCP 80 and 443",
    ],
    correctAnswer: "UDP 67 and 68",
  },
  {
    questions: "What additional feature does DHCP provide over BOOTP?",
    options: [
      "Fixed IP assignment",
      "Dynamic IP leasing and renewal",
      "Email handling",
      "File transfers",
    ],
    correctAnswer: "Dynamic IP leasing and renewal",
  },
  {
    questions: "In DHCP, what is the correct sequence of operations?",
    options: [
      "DHCPOFFER → DHCPREQUEST → DHCPDISCOVER → DHCPACK",
      "DHCPREQUEST → DHCPOFFER → DHCPDISCOVER → DHCPACK",
      "DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK",
      "DHCPOFFER → DHCPACK → DHCPREQUEST → DHCPDISCOVER",
    ],
    correctAnswer: "DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK",
  },
  {
    questions: "Which device connects LAN segments and avoids loops using STP?",
    options: ["Router", "Switch", "Bridge", "Hub"],
    correctAnswer: "Bridge",
  },
  {
    questions:
      "Which protocol prevents loops in LAN topologies by disabling certain ports?",
    options: ["STP", "DHCP", "RARP", "ARP"],
    correctAnswer: "STP",
  },
  {
    questions: "What is a VLAN primarily used for?",
    options: [
      "Extending IP address range",
      "Routing packets across subnets",
      "Logically segmenting a network",
      "Filtering MAC addresses",
    ],
    correctAnswer: "Logically segmenting a network",
  },
  {
    questions:
      "Which of the following is NOT a valid VLAN classification type?",
    options: ["Port-based", "Protocol-based", "Username-based", "MAC-based"],
    correctAnswer: "Username-based",
  },
  {
    questions: "What is VLAN tagging used for?",
    options: [
      "Encrypting VLAN traffic",
      "Carrying multiple VLANs over a single trunk link",
      "Assigning static IPs to VLANs",
      "Reducing broadcast traffic",
    ],
    correctAnswer: "Carrying multiple VLANs over a single trunk link",
  },
  {
    questions: "Which standard defines WLAN operations?",
    options: ["802.3", "802.5", "802.11", "802.15"],
    correctAnswer: "802.11",
  },
  {
    questions:
      "What is the main characteristic of the infrastructure wireless mode?",
    options: [
      "Devices communicate directly with each other",
      "Each device needs a fixed IP",
      "All communication goes through an access point",
      "Only MAC-based VLANs can work",
    ],
    correctAnswer: "All communication goes through an access point",
  },
  {
    questions:
      "Which wireless standard operates at 5 GHz and supports speeds up to 54 Mbps?",
    options: ["802.11b", "802.11a", "802.11g", "802.11n"],
    correctAnswer: "802.11a",
  },
  {
    questions:
      "What problem occurs when two stations, out of each other’s range, send data to the same destination?",
    options: [
      "Exposed Station Problem",
      "Packet Loss Problem",
      "Hidden Terminal Problem",
      "Frequency Collision",
    ],
    correctAnswer: "Hidden Terminal Problem",
  },
  {
    questions: "Which function uses CSMA/CA with RTS/CTS to avoid collisions?",
    options: ["PCF", "ICMP", "DCF", "BOOTP"],
    correctAnswer: "DCF",
  },
  {
    questions:
      "Which Inter Frame Space is used for highest priority messages like ACK?",
    options: ["PIFS", "DIFS", "SIFS", "AIFS"],
    correctAnswer: "SIFS",
  },
  {
    questions:
      "Which of the following is a polling-based access method in 802.11 MAC?",
    options: ["DCF", "RTS/CTS", "PCF", "CSMA/CD"],
    correctAnswer: "PCF",
  },
];
