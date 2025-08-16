import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, MapPin, Clock, Users, TrendingUp, Sparkles, Star } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Careers = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Mumbai / Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      title: "AI/ML Engineer",
      department: "Data Science",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["Python", "TensorFlow", "PyTorch", "AWS"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Mumbai",
      type: "Full-time",
      experience: "5-7 years",
      skills: ["Strategy", "Analytics", "User Research", "Agile"]
    },
    {
      title: "Blockchain Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Solidity", "Web3", "Ethereum", "Smart Contracts"]
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Mumbai / Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Competitive Salary", description: "Market-leading compensation packages" },
    { icon: Users, title: "Great Team", description: "Work with passionate, talented individuals" },
    { icon: Star, title: "Growth Opportunities", description: "Continuous learning and career advancement" },
    { icon: Briefcase, title: "Flexible Work", description: "Hybrid and remote work options" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-premium rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 gradient-growth rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <nav className="p-6">
          <div className="glass rounded-2xl p-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth hover:scale-105 transform">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to home
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 gradient-premium rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    FINEO
                  </span>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Help us revolutionize personal finance and build the future of fair, transparent financial services.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Why Join FINEO?</h2>
              <p className="text-lg text-muted-foreground">
                We offer more than just a job - we offer a career that makes a difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center mx-auto">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Open Positions</h2>
              <p className="text-lg text-muted-foreground">
                Find your perfect role and help us build the future of finance.
              </p>
            </div>

            <div className="grid gap-6">
              {jobs.map((job, index) => (
                <Card key={index} className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 50}ms`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{job.experience}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="premium" className="hover:scale-105 transform transition-all shadow-lg hover:shadow-glow">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold">Our Culture</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning. 
              Our team is passionate about making finance fair and accessible for everyone.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 gradient-premium rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Collaborative</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of teamwork and open communication.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 gradient-growth rounded-2xl flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Growth-Oriented</h3>
                  <p className="text-muted-foreground">
                    Continuous learning and development opportunities for everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 gradient-risk rounded-2xl flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold">Don't See Your Role?</h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented individuals to join our team.
            </p>
            <Link to="/contact">
              <Button variant="premium" size="lg" className="hover:scale-105 transform transition-all shadow-lg hover:shadow-glow">
                Send Us Your Resume
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Careers;