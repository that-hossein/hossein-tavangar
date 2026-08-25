import {
  Document,
  Page,
  Text,
  Link,
  View,
  StyleSheet,
  Font,
  pdf
} from '@react-pdf/renderer'
import {
  contact,
  education,
  experience,
  languages,
  name,
  skills,
  summary,
  themeColor,
  title
} from '@/data/resume'

Font.register({
  family: 'Arimo',
  fonts: [
    { src: '/fonts/Arimo-Regular.woff', fontWeight: 'normal' },
    { src: '/fonts/Arimo-Bold.woff', fontWeight: 'bold' },
    { src: '/fonts/Arimo-Italic.woff', fontStyle: 'italic' }
  ]
})

Font.register({
  family: 'Poppins',
  fonts: [{ src: '/fonts/Poppins-Bold.woff', fontWeight: 'bold' }]
})

const dark = '#333333'
const bullet = '•'

const styles = StyleSheet.create({
  page: {
    fontSize: 10.5,
    color: dark,
    fontFamily: 'Arimo',
    paddingVertical: 30
  },
  header: {
    backgroundColor: themeColor,
    color: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 20,
    paddingBottom: 15,
    marginTop: -30
  },
  name: {
    fontSize: 26,
    fontFamily: 'Poppins',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 20,
    marginTop: -3
  },
  contactLine: {
    fontSize: 10,
    color: '#eef6f1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    gap: 3
  },
  summary: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 7,
    lineHeight: 1.15
  },
  body: {
    paddingHorizontal: 32
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: themeColor,
    marginBottom: 8,
    marginTop: 14
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  skillItem: {
    width: '50%',
    flexDirection: 'row',
    marginBottom: 6,
    paddingRight: 8
  },
  bullet: {
    color: themeColor,
    marginRight: 6
  },
  experienceItem: {
    marginBottom: 10
  },
  position: {
    fontSize: 11.5,
    fontWeight: 'bold'
  },
  companyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  company: {
    fontStyle: 'italic',
    fontSize: 10
  },
  period: {
    fontStyle: 'italic',
    fontSize: 10
  },
  description: {
    fontSize: 10,
    lineHeight: 1.4,
    textAlign: 'justify'
  },
  educationItem: {
    marginBottom: 8
  },
  degree: {
    fontSize: 10.5,
    fontWeight: 'bold'
  },
  school: {
    fontStyle: 'italic',
    fontSize: 10
  },
  languageItem: {
    flexDirection: 'row',
    marginBottom: 6
  }
})

function formatDate(date: Date) {
  return `${new Intl.DateTimeFormat('en', { month: 'long' }).format(
    date
  )} ${new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)}`
}

function getDuration(start: Date, end: Date = new Date()) {
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts = []
  if (years) parts.push(`${years} ${years > 1 ? 'yrs' : 'yr'}`)
  if (months) parts.push(`${months} ${months > 1 ? 'mos' : 'mo'}`)

  return parts.join(' ')
}

export function ResumeDocument() {
  return (
    <Document title={`${name} CV`} author={name}>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.contactLine}>
            <Text>{contact.location}</Text>
            <Text>|</Text>
            <Text>{contact.phone}</Text>
            <Text>|</Text>
            <Link
              style={{ textDecoration: 'none', color: '#eef6f1' }}
              href={`mailto:${contact.email}`}>
              {contact.email}
            </Link>
            <Text>|</Text>
            <Link
              style={{ textDecoration: 'none', color: '#eef6f1' }}
              href={`https://${contact.linkedin}`}>
              {contact.linkedin}
            </Link>
            <Text>|</Text>
            <Link
              style={{ textDecoration: 'none', color: '#eef6f1' }}
              href={`https://${contact.website}`}>
              {contact.website}
            </Link>
          </View>
          <Text style={styles.summary}>{summary}</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsGrid}>
            {skills.map((skill) => (
              <View key={skill} style={styles.skillItem}>
                <Text style={styles.bullet}>{bullet}</Text>
                <Text>{skill}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Work Experience</Text>
          {experience.map((item) => (
            <View
              key={`${item.company}-${item.position}`}
              style={styles.experienceItem}
              wrap={false}>
              <Text style={styles.position}>
                {item.position}
                {item.isPartTime ? ' (Part-time)' : ''}
              </Text>
              <View style={styles.companyRow}>
                <Text style={styles.company}>{item.company}</Text>
                <Text style={styles.period}>
                  {formatDate(item.start)} -{' '}
                  {item.end ? formatDate(item.end) : 'Present'} (
                  {getDuration(item.start, item.end)})
                </Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((item) => (
            <View key={item.degree} style={styles.educationItem}>
              <Text style={styles.degree}>{item.degree}</Text>
              <View style={styles.companyRow}>
                <Text style={styles.school}>{item.school}</Text>
                <Text style={styles.period}>{item.period}</Text>
              </View>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Languages</Text>
          {languages.map((item) => (
            <View key={item.name} style={styles.languageItem}>
              <Text style={styles.bullet}>{bullet}</Text>
              <Text>
                {item.name} ({item.level})
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}

export async function generateResumePdf() {
  const blob = await pdf(<ResumeDocument />).toBlob()
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${name} CV.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}
