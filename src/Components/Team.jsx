import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOq7pFGh8JcSsWQ7QdTRKkqUC2nR0DHSktg&s',
  },
  {
    name: 'Jessica Brown',
    role: 'Web Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseaOc7ue_LQdbl9kc7V_LjFRjwvP26L5Lbg&s',
  },
  {
    name: 'Tony Johnson',
    role: 'SEO Expert',
    image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhMVFRUQFRUVFRUVFRAPDxAQFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0lHR0tLS0rLSstLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tNy0tKy0rLS0tLSstK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQIDAAEGBwj/xAA8EAABAwIEAwUGBAUEAwEAAAABAAIDBBEFITFREkFhBhMicYEUMpGhscEVQlLwFjNy0eEHYpLxJDSiI//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACYRAAICAgICAwACAwEAAAAAAAABAhEDMRIhBEEiMlETYTNxgQX/2gAMAwEAAhEDEQA/AFLSoSrTXLJCvATPWcSlzlbFFdUvRlI7JWiyUlZZHDyVjYVnHzVz381STtEaph1PR8QuEbFQ9FrCJB8U6hYFOhxZBT8BRjn2Vk7bIOZ6WNkpySKJ3XQrlY5yqc5URK7MOioiarC7JZGF0+P9xJ6KZwl1XzTGc5pdWc17ctHKgNkdwgaiHhIPVNISLIHE9F5s75HZGuJ1eDMDmBGT0uSVdmaocIuuje8EKVBFVLHb0TWl1QJsD5oyF4yRihWN2tyVLmK2GUW1WpHhWa6BZuAKuqiupNkAUpZAlq0EW8CXYpT8Qum7XC6onAOS5poou0c37MVidd01YkoFHEuFlF5VsoVLl5cWetXRU4q6BxUA1EQxXXXFdHNJ0xhDFcK4U10VhbARYpkaXZORkhThkhaeE8l0cM2SVGjzuj4Qpt9i30WTPug5SiZEHMU8dEZPsGc5VE5qL3KI1RNEm45KxnJQcMlcxq6/FXyJ5NAc5zS+q0KNnOZQU2hXsSOZALnWQFVLdNJG3alU8Wa4ZypnUl0E4XO5pyK6Fta62qU4bTC4K6KOiaQoqaYUgEVDjqiWSv3KNZRNTGmoW2TJgoCgndbVSfM4805goWq32BqqmA5s1L1J1U4jUp2/D2qAoGoBOekq3A6qt1ad09qcPbZL/YApzqwpi72hyxNfYmrEtL8NbOTnCHsiJlQvDgj2b6NtF0xo4kBGU7wsBwXbFdHFN9jCkiAzTaIIeCBXWLfRKYt7sKtzbKfe5IaWRKRmzUjkJKreJVSKiI+xc/VZHqsl1S6fFo4jm652GZ9dkYxlJ0kUtJDYq8DJcdU9pX3yAaP+RQzu0spy7w32AaLeYIXpePilB3I55u9HR1DsyhnOu1I/xx5Odjffwn5IqnxRjhY+E9SLH1XbKSZNRoMLckG5lyjw7whDxC59VxS+x0r6jKhhsAnVIbhD0cPhROHNUKqQAyBqPpdlVTxq+MWcqpGDIFch4zmirKiFKZAqkQ8KgrMJTMxBmJMXC6qLEGrMB92sRXAtrcTHnkzFUGJgYrlWCiXiwR6UpC4RJxhkdiFQabhTOgjtZdC0c8tj6khuFdNDkspj4VksoskkNYsmyQrpFdVuQJchE55MuYVCeQNBJNgBcnYKMZXP9s6wtjEYNuLN1rX4Ry9T9FbHDk6EE2M42ZSQw8DATmPef/YJL39uWu+brfZUE5Xdpyb/AHVLpydLfUr1IKMVSEfYQQT+xl5XUW2OuZGmoP8AZVAE8s1ghPPltf4JrNRc65+u624kD3uV+V7bZqPGGZ6HfMKl0lzbivseYO3ks2YMo8Rkb+bL9JPh/wALpsFmEni5fQriHG5tlbyGvmn/AGYcQXMvkbEbW0NkjV9huj0yhALfRborBxSyl4g3Iqlkzg7mouPYbOxhIv5qUjgCEigmcQM1a97junoFjwSBFtlG65jjcr2SuTJGOgMgQ7nhKu+d1VT5XI0YcNkG6i6QJJ3juq0ZXdVqMO+8G6xI+9csRoBXS0gKZx0OShSR5eSZ0+a8SGj0BJVUfJQpY0/qKa6XmnsU6FZfG6wQ1TIsc+2SHmesyUmUzuQd1dOUMSskRbLWOXn3aCr7yZx5NPyGQHy+a71pXnOINvJJpqTc5DK/Lddfj+wR2LnN4vETkOWtlVcck5wvApJwCAbOOq7DDuxcTR4tVSfkRgdMPGlPs82AP+QpMikcbNBJ9c16qeyMJOn0TrDMCihGTRdBeRekF+LW2eSUvZOpkF+E58jclDVnZ+eHVpyXu/A1gv8AZLa+m7w2LDnuEjzSHWCNHhUUBD7EHLkeacYE/u5mdXAEdD/2vQO0HZyMxFzQA8DULz1g4XgncfXX5LqxZOSOXLj4s9kosPBaqJ8NAcCm+GjwjyWVLEk0IgemoBZF+wBbpyiGORRmDMoQpsoQiWKYCcAKaFqgaFqPKiUQC80AUTQhHlQKwQL2ILEbZYsYA9lIKvibZHzsQ8jV40UdzLmC6ongVkTlOU5KvEVsQ1saXu1TOtclgOaQhJ9g1UUM4qyqdmhnvTJE2XtK8/xePxvGzj/2u8Y5criVJed/+4gj1/ZVsMqbGxq3R1XYR14BloujEYJQ1BQR0sQZcNAALnHIdSUql7YUjHEAlwB97kfJScHNtpHqKagkmdXTRAo2ODouQpe19K7MP4Scs7glO6PHWP8AcIdbZOk47QrkpaY27uyCqYSdFzeOdt2QA3Bc7Sw5ea4yfttUzusx4jb1c1nzKpGN9kpT49HodfG6xBFr3C8wxvDnwkh3UtPIi903oMfqgQDIyVnMXDiN7HVNu1tL30DHNFzxAW52eLfWypj+L6ZLJ8o9od4NiDixp6D6IifECgMOdDEWQOlHeuAHAA5wBA0LhkCm0uFlV5KWjmlCUdoFgxAhXtxAqUeGFXDDEyAaZXlW+3lQ/DiFZ+HlOKYcQKgcQKkcPKgcPKxjRxAqJxArDh5UTh5WMb/ECsUfw8rFjHQzaqvu7ouWHNWxRLyEjvAGxIasNk6dCk+KNsnsmznauVCBysqjmqTopkGAVD80G9+avn1QZOacUZ4fa5JbxBjXPLdOLhFwL+dlVX0Xevil4Ay5YHNHuW4he3xKlhk4Y7xaOBaegdldF426Qd0xhsAQ49S117fJKpNPo9DxYQeN/oV2zBdEGgE+LMN1IH+VwUtDUOybAxrd3AOf8NF6XI8G3MuJyRTKGIjxBp8wFTk0yvFNHjcPZqZztRe+gzsOoAXfdhcJdGXce4T13dl4iiAudbWAA3TjD4I4+YudTdGU3Jo0cUYo897SdlO/qHHMA5ZZeqDh7Ci4BiLrWAPFYfIL0+tbC824gCPikbMebFIY5QBY2Dxo5MpNexeCfoS0vYaGLxuAadQGucDfrurMYcGREZ2a2438OfxyT/EMTjc3dc1PMHPaL3HGAScxYkDMLJ2wNUEUtLG8RSwttwkG2puCL3PPUrui3TyXO9n4w6QNa2zIgczlxOvttcfIrqHBXwRpWc/lZOTS/AcMVtluy2r0chEtUgsWXRAaKiQpEqJKxiNlFwUuJQc4IBIrFriC2sAdlik1qmWrAF59HVyIPGS5/GH2BT+Y2C5HtBNZLJAk+jn5n5qL3ZKpxutPGSCRCwKZyCac0S4LIae6LQYlZK6DBLztLbg8DcwQDrkHA8kjqoS1DidzM2uLSRY2NrjZJovinwlY8kqQwA/pBaD1vb7JNiHaVzRYHNZFLxwkc2HnsdPuufxSjLs26hWilJ9nVzajaHtJinAzjaTx63PMnJL249PG5znPc4nUchnlkhaHD6hpaQA9jrXOZezrw3zXf03Z9jmj/wAoNJvcOhYBawte46o8UmOpyaOA9qqp38Ye4WOdrgAdU3xXEWiIMcL25uve9r3XYns63h/9qR5sfDEGxMB5aDTJchi/Ztz5HFz3iNtyGlwc52eV3J1FfhOTl6Ypw7FHPu0G4HqPim9HU8Ba8gO4XNPCcr2OiX0EUbGngHPMHUdELi9ZwgNac739EYxTl0TlN8LZ6TQ44zNwAbxWyyJy6ow483deb9n4ny8yuxhwBxF11pJKjhk23Y2GOt3WHHW7pX/D7ln8PuRAM/x5u6icfbulxwAqP8PnqsYYHtA3dROPjdBfw8eqi7ACsYLd2gG6qk7QDdCnASq3YAVjBH8QjdYhP4fW1jHrqyynZaK4qLWB1hyXC9oJPFZdtiT7NK86xme7ypSNID4lJ7skE+TNSllySomQBzTOlhSJ8lk9w+S4CdDRMxGDwpDUNyXTVmbfRc1VPskmh0B0ryHW1DsiN88lRXyt0HPJTlqu4dF+p8jCSfytLh9lrtdQ8EhkjHhcbkbHcdFf+Jw48vZbFJuLr0H4JW8NgRe30OycS41O0WaLi2V/3kuDw3EuE67rpqLGgc+LW22v7ss4NOysMtKhszF6t2RNhYHQjJVYq95jsTa+vLqhqztAAPfBGXqdly2Kdoi6+d/3ZOo2Tnk67IzVnCTn8EtxFzg4h2otltcX+6K7O0Znk43e6DfzKN7R08RqHMJLHFrTf3mG7bZj0V8aUpcVs5p3xtnS9gAHAL1amhHCF5f2EpyyzXfEZgjcL1Wn90JmmnTJmjCNlEwjZXKLgsApMQ2UTENlcQolExUYxsq3RhXlVlajFBiGyiYhsryFAhYxV3Q2WKaxYx06i9SVcpXJLRVCLH57NK85rJLuK7TtJLkQuEqnZlc72aRSTmpyBVQm5RnCsLQrlYU+wduSXd1n0+SMpMSji6+VgPirYsM5/VG5JbGdSw2XNT0/FJZ1w0Zk7jYKzEe0D3HI8I25/FKGTcT3Ovq34Lvx/wDn93N/8Feb8B8dHeOJ206JhSVjaiPhfk8Cx6pZVSXyH/aV1Ne2I3z4thr6qvlYFkj+NaKYMzxy/pl+IYGWklpy/fNK3QzN0TmDHiWeJvzFlplQJBcD0XmNZca+S6OusOR/F9nPyd4dSisNwl0js9PqncNFxHOwT7DqLh5JXndBWCNhGCUIjaBbRI+2lEXSxTN/odvYG4PzK6yNth+8guZxqsEj7NN2s58i7mq+HCU8lon5UoqFDbsdWhkrY3HJ2Q6OXrlP7oXz9G8gg6WK9E7P9ug1jWVAO3eDMdOIfdernwuT5RPNhOumegLRSyPFmPHE1wIPMZhbOJNXJVFbGCil5xIKP4mEDDAhQIQBxMKs4mFjDIhVvS92JhUSYoFjDNYlP4qFpEx3pQtW+wRDylmJSZLkkXRyuOSXJXISQue7KwvzJDR89V1VeLnPTU+S5PFHtcTvy5AeSp4vifzXJ6JZJ0WspmRe88k9Bl8SoS1zB7uvU3+iT+0O0J00P75KoS8V9xqP7L2IeNhjqJyynL9GEtWDkQQfPib6E6ICd2ai4319Oiq4+R15K/S6FMcb6oWZ5ZmPXyV5K05l0jQ6YoxKvIyjzJ58h/lJooyTd17nmd+q6N0AHJD1NGNRz1XLPHJu2UUkSgrHsp3w2DmvufF+Rxt4huchZVYRPwvAdo7LyPJbijLTbkdOijUU98wMxyU5YU4tDxnxdnc0dATy+SZzMbAziebbbnyHNIaHtfBBAwSXdKBYtHTIEn4Ln8Q7YiV/E5rjtoA0bALzcfiNy+bpHbPyUo/HY8r8WdK7gaC1g13cevRKe+a4eAg8ORtqD1S4Y+L+FjvWyVxulbIZWCxJJtqCCb2K9aEoY4qMF0efPlN3I6iHqiGeHyKWUmLsdlIDGeubPj/dNYrHTPmCMxmuuEk9EWqL6apkjdxRvLbcgTwEbEHJdRh2PsfYSHgd8iVy3G1nnspxzcX5WgdRxfVaeGM9gUmtHocUHGLtcHDoQVI0LlwMNYAfCXXHNpLCD6J9SdrJosnFsg2f7/8Ayb9wVyT8SS+rKrKvY/FA5YcOcmGCYzFVN8I4Xj3mG3EOo3HVMjZckk4umVTvs5l1A5Dvw9y6iSyodZAJzn4a5YuiWlgHUSFJsScmszkjrH3K5JlkzlsfqOAWGpzP2XG1lab+JuW45J5j0/E93nYeQXO1JNvsdl7uCHDGkjkm7ZW4hwBBHQoea/vN1b8xsh3P7t1x7jj4h+g72RZ+qonYjNNeHDiGh+RUZRxDqFSw8L7cn5+qucbI3YCpj7+Y1C3xKE3J49VJpvpoUAkJAoBTeLrRFwlCVujyUJWktNtTl5bqfHkRzU6bNoQqw6KO0vZ2KnMfdSiUSBxyLCQBazjbQOvocxYpI2iuV0MkGaoEKj/AkHmBU1GAmcEKxjFe2yrCCQrdmOpwRmAVOMcAs0WA2yW2OUrZqtIU3H1Unv5BQIsoGSxv0TXQKLnycAy95yix3d5uzcdBt1VHtAPi2GXmVUwF5uTl+9EOX4ahrh+IOjkbI15D2m4tnlzB3BXqmB40yqZcZPA8Tduo6LyBpDMhqfin/ZeqMU8br6uDXf0uyP1Uc2JTX9oeEqZ6c4KotRT2qstXm0XKLLFbZYiYbVLskkrnWaTsCfknFQkmMZRv/pKgl8kPfR5viElyUollI6j5hH1jrOO4+eaDc4O015he2jmYJK0OF2nzG/QhD0s9vAdNRfUbgoianOrciPgUDVsJGlnD4Hy/slfXZkX1ree2YV8EnEFS53GwHcKqklsbI33YK6L+LhOehUY/CeHkdFZO3iCoB4m2/M34ovZi8sUL2NlOB/EOoUZN1n+gQLOcx1y+K2yNzeR02uo1mnz+ChCZCOIZ3/3EH6Kb2OtBzZd8vMEKsGziP1fVbZUSD8nzBVct7g6fNPYtF/CtEKbcwsICJjTX2V0h57ochWsa5zTkQBbxcgUUwMi6S1tlVVu1PQqD33bnqNVGSW7QDzQsNGom3A6C59f8K6OpFrgZaA7nolxl4iQTZoOdvzdAi4xfxO8IGg0sEsZfhmguBudzqfkjoJc8uSVskL8m3Dd+ZRcT7EAclRMVnrlHjAfGxxObmgnztmpOxJu643A4nyRZflJH3+6PNBIvMmqk0dCdo6L8RbutLnfYZFtIE9FlSLHf5T/L7p5IkPaQ2hPU2+pSY1c0hno81rW3PUICenvnod0xq2XQhduvYS9M52B94Rk/PqtPaCOiIkHRDFtvIo6FBYhbiZ6jyP7KEJsUZVmxa7Y2Pkf82QsrRxf1ZhTkgph0MlwhZ7sIcFqlktkURM24W2g6ZVex4ho75FEkXQER4SWHQ6dCiad9vCeSMZAaNvZyQtK7gcW8jojnpfVssb7ISVdhQyHkqpWqFPJfJWvKZO0B9EIclaQqgFNrljGFdf2opGHD6SYFjHRNDTGPE5xeAdb3BHCSb7rjSVKrrJXsEbnksZoD68/VLIwJPkSeTs/VBSy+In9IFvMo2F3EC3mMwhDHd1vIlJLvQyMpWWtccTuQ5A9UWWAZyuuf0hTjgNv0j/6KuhpmjQX6lNGIGypr3PyHhb80SwhlhqeQ+6hJLbJoufkFkMR11J1KcU9G/wBNSHNmaeRY748QP0C7I07dlxv+l7QBPv8A/n8PGu4K4M6+bLQ0D+zt2WK9aUhgyXmub7Wfym/1fZYsQw/5EF6PP6z3j++SBm5fvmtLF7BzIi7n5FUvWLERQCs91375oN2rfM/RbWKMtjxNv94I9q2sWiFi2s94eaIf749FixKtsD9BR+yCqtCsWJ5gWyFJqEW5YsQhoaWzByUisWJgESq3LaxAwNTfzFFv80rFiRaX+w+w6TVX/lKxYrIUHp+aKiWLFogZ3H+lms/kz6uXflYsXn5/uy8NEVixYojH/9k=',
  },
];

const TeamSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div>
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Team<span></span>
          </p>
          <h1 className="text-center mb-5">Our Team Members</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="team-item bg-light rounded">
                <div className="text-center border-bottom p-4">
                  <img
                    className="img-fluid rounded-circle mb-4"
                    src={member.image}
                    alt={member.name}
                  />
                  <h5>{member.name}</h5>
                  <span>{member.role}</span>
                </div>
                <div className="d-flex justify-content-center p-4">
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
