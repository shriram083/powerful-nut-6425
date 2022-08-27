import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Input,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import google from "./assets/google-svgrepo-com.svg";
import React from "react";
import style from "./clickup.module.css";
const Clickup = () => {
  return (
    <>
      <div className={style.mainHeadDiv}>
        <div className={style.HeadDiv}>
          <h1>ClickUp time tracking integration</h1>
          <p>
            Accurate time tracker for timesheets, budgeting, client reporting,
            and payroll. Works inside ClickUp. No more tab switching!
          </p>
        </div>
        <div className={style.tryBtn}>
          <p>Try with my ClickUp</p>
        </div>
        <div className={style.listParaDiv}>
          <p>Free to try</p>
          <p className={style.dot}>.</p>
          <p>No credit card requiured</p>
          <p className={style.dot}>.</p>
          <p>1-minute signup</p>
        </div>
      </div>
      <div className={style.imgDiv}>
        {/* <img src='https://blog-cdn.everhour.com/assets/images/new-design/background-elements/dotted/dimond-dotted-orange.png' alt='orangedotimg'/> */}
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp"
          alt="img"
        />
        {/* <img src='https://blog-cdn.everhour.com/assets/images/new-design/background-elements/dotted/oval-dotted-green.png' alt='green dotes img'/> */}
      </div>
      <div className={style.whyClickUp}>
        <div className={style.leftWhyClickUp}>
          <h1>
            Why Everhour is the best time tracking integration for ClickUp on
            the market?
          </h1>
          <img
            src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/clickup-vs-everhour-with-bag.webp"
            alt="meet img"
          />
        </div>
        <div className={style.rightWhyClickUp}>
          <div>
            <h1>1. Quick Setup</h1>
            <p>
              When you connect ClickUp with Everhour <u>timesheet app</u>, we
              automatically sync your projects so that your team can start
              tracking time right away.
              <mark>No manual project setup required.</mark>
            </p>
          </div>
          <div>
            <h1>2. Less employee teaching</h1>
            <p>
              You don’t need to explain to your staff how to use additional
              <u>employee time tracking software.</u> Time tracking controls
              will <mark>appear right inside the ClickUp interface,</mark>{" "}
              making it easy for them to track time.
            </p>
          </div>
          <div>
            <h1>3. Accuracy</h1>
            <p>
              Employees often forget to track time as it's not convenient for
              them to switch between <u>time clock app</u> and project
              management app. Everhour eliminates these steps and{" "}
              <mark>improves time tracking accuracy.</mark>
            </p>
          </div>
          <div>
            <h1>4. Estimates are always in front of you</h1>
            <p>
              Everhour shows time vs. estimate beside task and subtask titles.
              When the entire team sees progress, they will{" "}
              <mark>urge you to ensure the work is done.</mark>
            </p>
          </div>
          <div>
            <h1>5. Automatic updates</h1>
            <p>
              When you add a new project or change the name of the existing task
              in ClickUp, Everhour will sync this change automatically. That
              means your{" "}
              <mark>reports will always show the freshest data.</mark>
            </p>
          </div>
          <div>
            <h1>6. Detailed reports</h1>
            <p>
              ClickUp time tracking reports let you organize reported time using
              <mark>various information from your ClickUp tasks</mark> such as
              tags, sections, or custom fields. So you can dive deeper into{" "}
              <u>tracked work hours</u> analysis to get more accurate results.
            </p>
          </div>
        </div>
      </div>
      {/* <div className={style.howDiv}>
        <div className={style.howDivDetail}>
          <h1>How does Everhour integrate with ClickUp?</h1>
          <p>
            After you successfully connected Everhour and ClickUp, there are
            multiple <br></br> useful features you can start using directly in
            your ClickUp interface
          </p>
        </div>
        <div className={style.howIntDiv}>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Time next to your tasks</h1>
              <p>
                You'll see a timer, estimate, and reported time next to the task
                title, as well as total time, displayed by section, custom
                field, or for the entire project.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-timer-on-project-board.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-task-details-with-time.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Time in task details</h1>
              <p>
                In the task details, you’ll see the time reported by each
                employee and its progress, plus time on parent and subtasks. You
                can track time using the timer or log time manually.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Manual time entries</h1>
              <p>
                If you forgot to start the timer, or you prefer to fill in all
                your work hours in one go, use manual mode.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-add-time.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-project-budgeting.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Project budget</h1>
              <p>
                Choose a billing method for your project: hourly, fixed fee, or
                non-billable. Set up the budget and the limits. Receive an email
                alert when you reach a certain threshold.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>My Timesheet button</h1>
              <p>
                Quickly look at all your timekeeping for a Day or Week as well
                as start the timer or add time and comments for the tasks you
                have been working on.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-timesheet-modal.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-time-in-portfolio.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Time on Portfolios</h1>
              <p>
                Estimate and reported time will be displayed on ClickUp's
                Portfolio page.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Time on Homepage</h1>
              <p>
                Don’t waste time searching for progress updates on your most
                important projects. Everhour shows estimate and reported time
                right on the Home page.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-time-on-home-page.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-timeline.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Time on Timeline</h1>
              <p>
                Use Timeline to create project plans that help you stay on
                schedule—so you hit your deadlines. Everhour helps you by
                showing estimates and reported time right there.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Project summary</h1>
              <p>
                Everhour adds the Project Summary page right into ClickUp's
                interface. So the information about time spent on the project,
                budget usage, billable vs non-billable hours, etc. - everything
                is just one click away.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/ClickUp-everhour-tab.webp"
                alt="timer"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className={style.howTrack}>
        <h1>How to track time in ClickUp with Everhour</h1>
        <ul>
          <li>
            <h1>Step 1: Create your Everhour account</h1>
            <p>
              Sign up for free and install our browser extension. This is how we
              embed controls into the Clickup interface. We support all popular
              browsers: Chrome, Firefox, Safari, Edge.
            </p>
          </li>
          <li>
            <h1>Step 2: Connect Everhour and ClickUp</h1>
            <p>
              After signup, Everhour will automatically sync all your projects.
              You can choose between lists or folders to be your projects. Sync
              happens periodically so all new projects that you create in
              ClickUp will be visible in Everhour reports. Everhour also updates
              the names of tasks or projects if they were renamed in ClickUp.
              This way Everhour reports will always show you the freshest data.
            </p>
          </li>
          <li>
            <h1>Step 3: Invite your team</h1>
            <p>
              You need to invite your team to join Everhour. They will also need
              to connect their ClickUp accounts and install our browser
              extension. Only those you invite into Everhour will be able to
              track time and see time progress (not necessarily all ClickUp
              users). Your clients or guests will not see anything in ClickUp
              unless you invite them.
            </p>
          </li>
          <li>
            <h1>Step 4: Track time inside ClickUp</h1>
            <p>
              You can track time using the timer or log time manually. You’ll
              see the time reported by each employee and its progress, plus time
              on parent and all subtasks.
            </p>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/clickup-new-controls.webp"
              alt="img"
            />
          </li>
          <li>
            <h1>Step 5: Track time via the Everhour browser extension</h1>
            <p>
              You don't necessarily need to open ClickUp or Everhour website. By
              clicking on the timer icon in the browser toolbar you can quickly
              start the timer, add time to any task, edit time or estimate, and
              more.
            </p>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/screens/time-tracking-extension.webp"
              alt="img"
            />
          </li>
          <li>
            <h1>Step 6: Make custom reports with ClickUp data</h1>
            <p>
              There are a number of columns that show specific data coming from
              ClickUp. Open a report builder and select any of the columns to
              display the data in your report.
            </p>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/report-builder-v2.webp"
              alt="img"
            />
          </li>
          <li>
            <h1>Step 7: Find out more...</h1>
            <p>
              Timers page shows what your team is doing right now. Timesheet
              page helps to view the structured picture of the time a member
              spent for a week. Timecard page displays when a user started their
              workday, when they had breaks and when they finished their work.
              Timeoff page shows all vacations, sick leaves, and any other PTO
              types.
            </p>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/team-timers.webp"
              alt="img"
            />
          </li>
        </ul>
      </div>
      <div className={style.starDiv}>
        <div>
          <HStack>
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
          </HStack>
        </div>
        <div>
          <p>
            4.5 / 5 that's how people rate Everhour. See what 500+ reviewers are
            saying about<br></br> us on popular platforms, such as Capterra,
            G1Crowd, or TrustRadius
          </p>
        </div>
      </div>
      <div className={style.faqDiv}>
        <div className={style.leftFaqDiv}>
          <h1>Your questions. Answered!</h1>
          <p>
            Here is a list of the most frequently asked questions. Got others or
            some ideas? — Contact us!
          </p>
          <img
            src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp"
            alt="img"
          />
        </div>
        <div className={style.rightFaqDiv}>
          <Accordion allowToggle>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Is Everhour easy to connect with ClickUp?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                Yes. Just click Try with my ClickUp and connect it with
                Everhour. The next step would be to install our browser
                extension. And that's it! Open your ClickUp and start tracking
                time.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    How does Everhour for ClickUp work?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                After integration, Everhour embeds controls into the ClickUp
                interface and thus extends it with many useful features. You can
                keep tracking time from ClickUp, through the Everhour website or
                browser extension.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Why choose Everhour for time tracking in ClickUp?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                ClickUp’s native time tracker is simple and easy to use.
                However, it is quite basic and lacks some essential time
                tracking features. For example, time approval, tracking
                vacations, and other leave types, project billing and budgeting,
                invoices based on tracked time and expenses, etc. No time
                tracker can ever compete with ClickUp in terms of project
                management. But, at the same time, time tracking always requires
                in-depth, individual attention. The best apps focus on just one
                thing and do it really, really well.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    What if not all my ClickUp users need time tracking?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                No problem. You can invite and pay only for those ClickUp users
                who are going to track time and use other Everhour features.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Will someone else (like clients) see my time?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                Only those people who are a part of your Everhour team and
                installed our browser extension can see time-related data in
                ClickUp.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Does Everhour work on ClickUp native apps?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                Unfortunately, it is not possible due to technical reasons. Only
                folks at ClickUp can decide to integrate with Everhour. Other
                time trackers can't do this either.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className={style.partnerDiv}>
        <img src="https://i.postimg.cc/Xq8gxpc1/partner.png" alt="partner" />
      </div>

      <div className={style.reviewDiv}>
        <div>
          <p>
            <mark>“Everhour has a really nifty integration with</mark> ClickUp
            and provides you the information in a single click. The interface is
            very intuitive and helps us reduce the time needed to report hours
            of different project tasks. On top of the nice integration, it goes
            even further and provides a way to get more grip on a project by
            defining a budget. And when all hours are written, you can customize
            your reports or use the API to run queries/exports of the data. We
            used Jira together with Timesheet, the performance withheld us from
            quickly adding tickets and time. We found ClickUp and together with
            Everhour we have a better solution which works faster and gives
            better insights.”
            <br />
            <br /> — Paul G. (Source: Capterra)
          </p>
        </div>
        <div>
          <p>
            "Simple, elegant, and powerful. My team uses Everhour for a few
            reasons: (1) It has a simple, intuitive interface; (2) It has a
            powerful reporting engine that we now use for generating various
            insights, including employee time analyses and customer invoices;
            (3){" "}
            <mark>
              It comes with solid integrations with task management software
            </mark>
            (we use ClickUp in particular); (4) Per-user costs are low, which is
            essential for us as we have many part-time employees, some of whom
            only work a few hours per week."
            <br />
            <br /> — Aaron M. (Source: G2.com)
          </p>
        </div>
        <div>
          <p>
            "We use Everhour for time recording of onsite activities of our
            technicians and to record comments and document the projects. The
            Everhour helps us to convert time into money without utilizing much
            time. There is a hierarchy in the website if we follow that things
            will get much easier in Everhour. We create the time records in
            Everhour and associate them with the projects. The project will
            generate its stats and will give us an insight into our income and
            expense. I like Everhour and its connection with different web apps.
            <mark>We have integrated it with Slack and ClickUp.</mark> The time
            records get saved in Everhour, ClickUp uses it as a reference to
            show it on a task, and a Slack channel notifies its user if there is
            an action trigger."
            <br />
            <br /> — Shehroze M. (Source: TrustRadius)
          </p>
        </div>
        <div>
          <p>
            <mark>"Love Everhour with the ClickUp integration!</mark> I love
            that I can dial down to exactly how much time we spend on each
            project, client and task. It allows me to create money or time
            budgets for each client per month, which is how I set it up. We need
            to keep our staff time to a monthly limit to ensure we're not losing
            money. I've been able to create time benchmarks using Everhour,
            which is a beautiful thing."
            <br />
            <br /> — David S. (Source: Capterra)
          </p>
        </div>
        <div>
          <p>
            <mark>"Everhour is vital for our business.</mark> We love the ease
            of integration with our existing software (crucially ClickUp). Great
            UX/UI. Easy to create custom reports and monitor budgets on each
            project we are working on. Simple to introduce to new team members.
            Get your whole team to try it for a week, review your reports and
            see how you can improve. The level of detail is so useful."
            <br />
            <br /> — Sarah M. (Source: G2.com)
          </p>
        </div>
        <div>
          <p>
            “Very friendly tool to track time. With Everhour we can track
            employees' and contractors' hours by client projects and run
            reports. Also,{" "}
            <mark>Everhour can be synced with our CRM's Asana and ClickUp</mark>{" "}
            and the timer is directly there and time can be tracked. Time can be
            added individually or in batches per week. You can also track time
            off and select if those are holidays, sick leave, paid or unpaid
            time."<br/><br/> — Claudia P. (Source: G2.com)
          </p>
        </div>
      </div>
      <div className={style.readMoreButton}>
        <div>
          <p>Read More</p>
        </div>
      </div>
      <div className={style.signupDiv}>
        <div className={style.leftSignupDiv}>
          <h1>ClickUp time tracking made smart</h1>
          <p>Try today for free to see how Everhour works for your business</p>
          <div className={style.signupInputDiv}>
            <Input type="text" placeholder="Work email..." />
            <div>
              <p>Try it free</p>
            </div>
          </div>
          <div>
            <img src={google} alt="google.svg" />
            <p>Or sign up with Google Account</p>
          </div>
        </div>
        <div className={style.rightSignupDiv}>
          <ul>
            <li>Works natively with ClickUp</li>
            <li>Syncs automatically</li>
            <li>No long learning process</li>
            <li>Quick and easy to start</li>
            <li>3,500+ happy customers</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Clickup;
