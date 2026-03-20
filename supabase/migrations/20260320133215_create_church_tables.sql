/*
  # Create church content tables

  1. New Tables
    - `sermons` - Store video/audio sermons with titles, dates, and URLs
    - `events` - Store church events and programs with schedules
    - `testimonials` - Store member testimonials and experiences
    - `about_content` - Store church information and details
  
  2. Security
    - Enable RLS on all tables
    - Add public read policies for displaying content
    - No write access from client (admin only)

  Note: These tables are read-only from the public API
*/

CREATE TABLE IF NOT EXISTS about_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL UNIQUE,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS sermons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  speaker text NOT NULL,
  date date NOT NULL,
  video_url text,
  audio_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  day_of_week text NOT NULL,
  time text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  content text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE sermons ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read about content"
  ON about_content FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read sermons"
  ON sermons FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read events"
  ON events FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (true);

INSERT INTO about_content (section, title, content) VALUES
('mission', 'Our Mission', 'To spread the gospel of Jesus Christ and make disciples of all nations through the power of the Holy Spirit.'),
('vision', 'Our Vision', 'To be a transformative church that impacts lives, families, and communities with the love and truth of Jesus Christ.'),
('history', 'Our Story', 'First Love Assembly was founded with a passion to create a space where believers can encounter God''s presence, grow spiritually, and serve their communities with compassion and integrity.');

INSERT INTO events (title, description, day_of_week, time, category) VALUES
('Sunday Worship Service', 'Join us for our main worship service featuring praise, worship, and powerful preaching from God''s Word.', 'Sunday', '10:00 AM', 'Worship'),
('Prayer Meeting', 'Mid-week prayer and intercession session. A time to seek God''s face together.', 'Wednesday', '7:00 PM', 'Prayer'),
('Bible Study', 'Deep dive into Scripture with our pastoral team. Grow in knowledge and understanding of God''s Word.', 'Friday', '7:00 PM', 'Teaching'),
('Youth Fellowship', 'A vibrant gathering for young believers to worship, discuss faith, and build community.', 'Saturday', '3:00 PM', 'Community'),
('Children''s Church', 'Age-appropriate worship and teaching for our young ones during Sunday service.', 'Sunday', '10:00 AM', 'Children');

INSERT INTO testimonials (name, role, content) VALUES
('Chioma Okafor', 'Church Member', 'First Love Assembly transformed my spiritual life. The welcoming atmosphere and powerful messages have drawn me closer to God.'),
('Emeka Nwankwo', 'Community Volunteer', 'This church truly lives out their faith through their community outreach. I''ve witnessed real change in people''s lives.'),
('Grace Okorie', 'Choir Member', 'The worship experience here is incredible. Every service leaves me refreshed and reconnected with my purpose in Christ.');

INSERT INTO sermons (title, description, speaker, date, video_url) VALUES
('The Power of Faith', 'An inspiring message about trusting God in uncertain times and seeing miracles happen.', 'Pastor Solomon', '2025-03-16', 'https://www.youtube.com/embed/dQw4w9WgXcQ'),
('Living in Victory', 'Understanding how to walk in the victory Christ has already won for us.', 'Pastor Solomon', '2025-03-09', 'https://www.youtube.com/embed/dQw4w9WgXcQ'),
('Love Never Fails', 'Exploring the transformative power of God''s love in our daily lives and relationships.', 'Pastor Solomon', '2025-03-02', 'https://www.youtube.com/embed/dQw4w9WgXcQ');